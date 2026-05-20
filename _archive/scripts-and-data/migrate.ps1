# Migrate HTML files to use shared nav/footer components

Set-Location $PSScriptRoot
$files = @("wales.html", "england.html", "ireland.html", "scotland.html", "collection.html", "trail.html", "region.html")

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Migrating: $file"
        
        # Read file
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Replace nav section
        $content = $content -replace '(?s)<nav class="nav">.*?</nav>', '<div id="site-nav"></div><script src="/components/nav.js"></script>'
        
        # Remove mobile menu
        $content = $content -replace '(?s)<div class="mobile-menu">.*?</div>\s*(?=<section)', ''
        
        # Add footer component
        if ($content -notmatch '<footer') {
            $content = $content -replace '</body>', '<div id="site-footer"></div><script src="/components/footer.js"></script></body>'
        } else {
            $content = $content -replace '(?s)<footer.*?</footer>', '<div id="site-footer"></div><script src="/components/footer.js"></script>'
        }
        
        # Write file
        $content | Out-File $file -Encoding UTF8 -NoNewline
        
        Write-Host "Done: $file"
    } else {
        Write-Host "Not found: $file"
    }
}

Write-Host "Migration complete"