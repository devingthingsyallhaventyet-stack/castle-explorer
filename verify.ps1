Set-Location $PSScriptRoot
$files = @("wales.html", "england.html", "ireland.html", "scotland.html", "collection.html", "trail.html", "region.html")

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $hasNav = $content -match 'site-nav'
        $hasFooter = $content -match 'site-footer'
        $hasDataScript = $content -match 'data-.*\.js'
        Write-Host "$file`: Nav=$hasNav, Footer=$hasFooter, DataScript=$hasDataScript"
    } else {
        Write-Host "$file`: NOT FOUND"
    }
}