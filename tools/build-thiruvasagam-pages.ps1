$source = Get-Content -LiteralPath 'sd\Thiruvasagam.html' -Raw -Encoding utf8
$start = $source.IndexOf('<div class="source-link-wrap">')
$s1 = $source.IndexOf('<b id="section-1"')
$s2 = $source.IndexOf('<b id="section-2"')
$s3 = $source.IndexOf('<b id="section-3"')
$ending = $source.IndexOf('<b class="highlight-yellow">', $s3)
$closeMarker = "`r`n`t`t`t`t</div>`r`n`t`t`t</div>`r`n`t`t`t<div class=`"card-footer"
$contentEnd = $source.IndexOf($closeMarker, $ending)
if ($contentEnd -lt 0) {
  $closeMarker = "`n`t`t`t`t</div>`n`t`t`t</div>`n`t`t`t<div class=`"card-footer"
  $contentEnd = $source.IndexOf($closeMarker, $ending)
}
if (@($start, $s1, $s2, $s3, $ending, $contentEnd) | Where-Object { $_ -lt 0 }) {
  throw 'Could not find all section boundaries.'
}

$fragments = @{
  '00' = $source.Substring($start, $s1 - $start)
  '01' = $source.Substring($s1, $s2 - $s1)
  '02' = $source.Substring($s2, $s3 - $s2)
  '03' = $source.Substring($s3, $ending - $s3)
  '99' = $source.Substring($ending, $contentEnd - $ending)
}

$pageFiles = Get-ChildItem -LiteralPath 'thiruvasagam' -Filter '*-Thiruvasagam.html'
foreach ($_ in $pageFiles) {
  $old = Get-Content -LiteralPath $_.FullName -Raw -Encoding utf8
  $number = $_.BaseName.Substring(0, 2)
  $displayNumber = if ($number -eq '00') { '00' } else { [int]$number }
  $match = [regex]::Match($old, '<title>\d{2}-(.*?) \| .*?</title>')
  if (-not $match.Success) { throw "Title not found in $($_.Name)" }
  $title = $match.Groups[1].Value
  if ($fragments.ContainsKey($number)) {
    $fragment = $fragments[$number]
    # The topic is now displayed in the card header, so do not repeat its
    # former yellow section label at the start of the content.
    $fragment = [regex]::Replace(
      $fragment,
      '^<b id="section-\d+" class="highlight-yellow section-anchor">.*?</b><br>\s*(?:<br>\s*)?',
      ''
    )
  } else {
    $page = @"
<!DOCTYPE html>
<html lang="ta">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>$number-$title | திருவாசகம்</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="../sd/sd.css">
  <link rel="stylesheet" href="page.css">
</head>
<body>
<div class="container-fluid page-wrap">
  <div class="mx-md-4">
    <div class="card stotra-card">
      <h1 class="card-header display-5">$displayNumber. $title
        <button id="themeToggle" class="theme-toggle-btn" type="button" aria-label="Toggle day and night theme">🌙 Night</button>
      </h1>
      <div class="card-body display-6 stotra-text">
        <div class="verse tamil-verse">To be filled.</div>
      </div>
      <div class="card-footer bg-transparent border-success"><i>Udhay's</i></div>
    </div>
  </div>
</div>
<script src="../sd/sd.js"></script>
<script>initThemeToggle();</script>
</body>
</html>
"@
    Set-Content -LiteralPath $_.FullName -Value $page -Encoding utf8
    continue
  }
  # A split page no longer needs the separator that preceded the next section.
  $fragment = [regex]::Replace($fragment, '(?s)<br>\s*<hr>\s*$', '')
  $page = @"
<!DOCTYPE html>
<html lang="ta">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>$number-$title | திருவாசகம்</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="../sd/sd.css">
  <link rel="stylesheet" href="page.css">
</head>
<body>
<div class="container-fluid page-wrap">
  <div class="mx-md-4">
    <div class="card stotra-card">
      <h1 class="card-header display-5">$displayNumber. $title
        <button id="themeToggle" class="theme-toggle-btn" type="button" aria-label="Toggle day and night theme">🌙 Night</button>
      </h1>
      <div class="card-body display-6 stotra-text">
        <div class="verse tamil-verse">
$fragment
        </div>
      </div>
    </div>
  </div>
</div>
<script src="../sd/sd.js"></script>
<script>initThemeToggle();</script>
</body>
</html>
"@
  Set-Content -LiteralPath $_.FullName -Value $page -Encoding utf8
}
