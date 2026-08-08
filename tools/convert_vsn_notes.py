"""Convert udhay_Notes.docx into the repository's VSN notes page."""

from __future__ import annotations

import html
import re
import shutil
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
A = "http://schemas.openxmlformats.org/drawingml/2006/main"
WP = "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
PKG_REL = "http://schemas.openxmlformats.org/package/2006/relationships"
NS = {"w": W, "r": R, "a": A, "wp": WP, "pr": PKG_REL}


def q(namespace: str, name: str) -> str:
    return f"{{{namespace}}}{name}"


def text_with_scripts(value: str) -> str:
    """Escape text and label Indic scripts so shared font sizes remain readable."""
    parts = re.split(r"([\u0900-\u097f]+|[\u0b80-\u0bff]+)", value)
    rendered: list[str] = []
    for part in parts:
        if not part:
            continue
        escaped = html.escape(part)
        if re.fullmatch(r"[\u0900-\u097f]+", part):
            rendered.append(f'<span class="vsn-devanagari" lang="sa">{escaped}</span>')
        elif re.fullmatch(r"[\u0b80-\u0bff]+", part):
            rendered.append(f'<span class="vsn-tamil" lang="ta">{escaped}</span>')
        else:
            rendered.append(escaped)
    return "".join(rendered)


def run_html(run: ET.Element, rels: dict[str, str]) -> str:
    pieces: list[str] = []
    for node in run.iter():
        if node.tag == q(W, "t"):
            pieces.append(text_with_scripts(node.text or ""))
        elif node.tag == q(W, "tab"):
            pieces.append("&emsp;")
        elif node.tag in {q(W, "br"), q(W, "cr")}:
            pieces.append("<br>")
        elif node.tag == q(A, "blip"):
            rid = node.get(q(R, "embed"))
            target = rels.get(rid or "", "")
            if target:
                filename = Path(target).name
                doc_pr = run.find(".//wp:docPr", NS)
                alt = (doc_pr.get("descr") or doc_pr.get("name") or filename) if doc_pr is not None else filename
                pieces.append(f'<img class="vsn-note-image" src="sd_images/{html.escape(filename)}" alt="{html.escape(alt)}" loading="lazy">')

    content = "".join(pieces)
    props = run.find("w:rPr", NS)
    if props is not None and content:
        if props.find("w:b", NS) is not None:
            content = f"<strong>{content}</strong>"
        if props.find("w:i", NS) is not None:
            content = f"<em>{content}</em>"
        if props.find("w:u", NS) is not None:
            content = f"<u>{content}</u>"
        color = props.find("w:color", NS)
        if color is not None:
            value = color.get(q(W, "val"), "")
            if re.fullmatch(r"[0-9A-Fa-f]{6}", value):
                content = f'<span style="color:#{value}">{content}</span>'
    return content


def paragraph_html(paragraph: ET.Element, rels: dict[str, str], in_cell: bool = False) -> str:
    pieces: list[str] = []
    for child in paragraph:
        if child.tag == q(W, "r"):
            pieces.append(run_html(child, rels))
        elif child.tag == q(W, "hyperlink"):
            inner = "".join(run_html(run, rels) for run in child.findall("w:r", NS))
            rid = child.get(q(R, "id"))
            href = rels.get(rid or "", "")
            pieces.append(f'<a href="{html.escape(href)}" target="_blank" rel="noopener noreferrer">{inner}</a>' if href else inner)

    content = "".join(pieces).strip()
    if not content:
        return ""
    props = paragraph.find("w:pPr", NS)
    style = ""
    if props is not None:
        style_node = props.find("w:pStyle", NS)
        style = style_node.get(q(W, "val"), "") if style_node is not None else ""
    if in_cell:
        return f'<div class="vsn-cell-line">{content}</div>'
    if style.lower().startswith("heading"):
        level_match = re.search(r"(\d+)", style)
        level = min(4, max(2, int(level_match.group(1)) + 1 if level_match else 2))
        return f'<h{level} class="vsn-section-heading">{content}</h{level}>'
    if style == "ListParagraph":
        return f'<p class="vsn-list-item">{content}</p>'
    return f'<p>{content}</p>'


def cell_html(cell: ET.Element, rels: dict[str, str]) -> str:
    output: list[str] = []
    for child in cell:
        if child.tag == q(W, "p"):
            value = paragraph_html(child, rels, in_cell=True)
            if value:
                output.append(value)
        elif child.tag == q(W, "tbl"):
            output.append(table_html(child, rels, nested=True))
    return "".join(output) or "&nbsp;"


def table_html(table: ET.Element, rels: dict[str, str], nested: bool = False) -> str:
    rows = table.findall("w:tr", NS)
    if not rows:
        return ""
    output = ['<div class="table-responsive vsn-table-wrap">', '<table class="table table-bordered table-hover stotra-table vsn-names-table">', "<tbody>"]
    for row_index, row in enumerate(rows):
        cells = row.findall("w:tc", NS)
        is_section = row_index == 0
        output.append('<tr class="vsn-table-heading">' if is_section else "<tr>")
        tag = "th" if is_section else "td"
        for cell_index, cell in enumerate(cells):
            props = cell.find("w:tcPr", NS)
            colspan = ""
            if props is not None:
                span = props.find("w:gridSpan", NS)
                if span is not None:
                    colspan = f' colspan="{html.escape(span.get(q(W, "val"), "1"))}"'
            cell_class = f' class="vsn-col-{min(cell_index + 1, 3)}"'
            output.append(f"<{tag}{cell_class}{colspan}>{cell_html(cell, rels)}</{tag}>")
        output.append("</tr>")
    output.extend(["</tbody>", "</table>", "</div>"])
    return "".join(output)


def main(source: Path, repo: Path) -> None:
    destination = repo / "sd" / "VSN_B_Names.html"
    image_dir = repo / "sd" / "sd_images"
    image_dir.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(source) as archive:
        document = ET.fromstring(archive.read("word/document.xml"))
        rel_root = ET.fromstring(archive.read("word/_rels/document.xml.rels"))
        rels = {rel.get("Id", ""): rel.get("Target", "") for rel in rel_root}
        media = sorted(name for name in archive.namelist() if name.startswith("word/media/") and not name.endswith("/"))
        for name in media:
            with archive.open(name) as incoming, (image_dir / Path(name).name).open("wb") as outgoing:
                shutil.copyfileobj(incoming, outgoing)

    body = document.find("w:body", NS)
    if body is None:
        raise RuntimeError("The DOCX has no document body")
    content: list[str] = []
    for child in body:
        if child.tag == q(W, "p"):
            value = paragraph_html(child, rels)
            if value:
                content.append(value)
        elif child.tag == q(W, "tbl"):
            content.append(table_html(child, rels))

    page = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vishnu Sahasranamam — Names and Explanations</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="sd.css">
</head>
<body>
<div class="container-fluid page-wrap vsn-notes-page">
  <div class="mx-md-4">
    <div class="card stotra-card">
      <h1 class="card-header display-5">Vishnu Sahasranamam — Names and Explanations
        <button id="themeToggle" class="theme-toggle-btn" type="button" aria-label="Toggle day and night theme">🌙 Night</button>
      </h1>
      <div class="card-body vsn-notes-content">
        <p class="vsn-back-link"><a href="VishnuSahasraNamam.html">← Shri Vishnu Sahasranamam</a></p>
        {''.join(content)}
      </div>
      <div class="card-footer bg-transparent border-success"><i>Udhay's</i></div>
    </div>
  </div>
</div>
<script src="sd.js"></script>
<script>initThemeToggle();</script>
</body>
</html>
'''
    destination.write_text(page, encoding="utf-8")
    print(f"Wrote {destination} ({destination.stat().st_size:,} bytes) and extracted {len(media)} images")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: convert_vsn_notes.py SOURCE.docx REPOSITORY")
    main(Path(sys.argv[1]), Path(sys.argv[2]))
