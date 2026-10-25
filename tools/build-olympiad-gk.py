"""Refresh the browser question bank from the single Olympiad GK JSON source."""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1] / "pranev"
bank = json.loads((root / "olympiad-8-gk.json").read_text(encoding="utf-8"))
if not isinstance(bank, list) or not bank:
    raise ValueError("Question bank must be a nonempty array")
if len({question["id"] for question in bank}) != len(bank):
    raise ValueError("Question IDs must be unique")
payload = json.dumps(bank, ensure_ascii=False, indent=2)
(root / "olympiad-8-gk.js").write_text(
    "// Generated from olympiad-8-gk.json by tools/build-olympiad-gk.py.\n"
    "// Edit the JSON source, then rerun the build script.\n"
    "window.allenQuestionBank = " + payload + ";\n",
    encoding="utf-8",
)
print(f"Built Olympiad GK browser bank: {len(bank)} questions")
