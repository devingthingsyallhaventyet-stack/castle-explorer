# Fix Navigation Migration - Remove remaining old nav/footer HTML
Write-Host "🔧 Fixing Migration - Removing old nav/footer HTML" -ForegroundColor Cyan

$stats = @{
    TotalFiles = 0
    ProcessedFiles = 0
    SkippedFiles = 0
    ErrorFiles = 0
}

# Get all HTML files (skip cinematic ones)
$htmlFiles = Get-ChildItem -Path "." -Filter "*.html" -Recurse | Where-Object {
    $_.FullName -notmatch "node_modules" -and $_.FullName -notmatch "wrangler" -and $_.FullName -notmatch "\.git"
}

$stats.TotalFiles = $htmlFiles.Count
Write-Host "Found $($stats.TotalFiles) HTML files" -ForegroundColor Green

foreach ($file in $htmlFiles) {
    $relativePath = $file.FullName.Substring($PWD.Path.Length + 1)
    
    try {
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        
        # Skip cinematic pages
        if ($content -match 'float-nav') {
            $stats.SkippedFiles++
            continue
        }
        
        $originalContent = $content
        
        # Remove old nav structures - multiple patterns
        $content = $content -replace '(?s)<nav class="nav">.*?</nav>', ''
        $content = $content -replace '(?s)<nav class="site-nav">.*?</nav>', ''
        $content = $content -replace '(?s)<div class="nav">.*?</div>', ''
        $content = $content -replace '(?s)<div class="site-nav">.*?</div>', ''
        
        # Remove mobile menu
        $content = $content -replace '(?s)<div class="mobile-menu">.*?</div>', ''
        $content = $content -replace '(?s)<div class="mob-menu">.*?</div>', ''
        
        # Remove old footer structures
        $content = $content -replace '(?s)<footer>.*?</footer>', ''
        $content = $content -replace '(?s)<div class="footer">.*?</div>', ''
        
        # Remove old nav/footer CSS - multiple selectors
        $content = $content -replace '(?s)/\* NAV \*/.*?/\* [^/]+ \*/', ''
        $content = $content -replace '(?s)\.nav\{[^}]*\}', ''
        $content = $content -replace '(?s)\.site-nav[^{]*\{[^}]*\}', ''
        $content = $content -replace '(?s)\.nav-[^{]*\{[^}]*\}', ''
        $content = $content -replace '(?s)\.mega-[^{]*\{[^}]*\}', ''
        $content = $content -replace '(?s)\.mobile-menu[^{]*\{[^}]*\}', ''
        $content = $content -replace '(?s)\.hamburger[^{]*\{[^}]*\}', ''
        $content = $content -replace '(?s)\.mob-[^{]*\{[^}]*\}', ''
        $content = $content -replace '(?s)footer[^{]*\{[^}]*\}', ''
        $content = $content -replace '(?s)\.footer-[^{]*\{[^}]*\}', ''
        
        # Remove any dangling nav/footer comments
        $content = $content -replace '<!-- NAV -->', ''
        $content = $content -replace '<!-- FOOTER -->', ''
        $content = $content -replace '<!-- /NAV -->', ''
        $content = $content -replace '<!-- /FOOTER -->', ''
        
        # Clean up excessive whitespace
        $content = $content -replace "`r?`n`r?`n`r?`n+", "`r`n`r`n"
        
        # Only write if content changed
        if ($content -ne $originalContent) {
            $content | Out-File -FilePath $file.FullName -Encoding UTF8 -NoNewline
            Write-Host "Fixed: $relativePath" -ForegroundColor Yellow
            $stats.ProcessedFiles++
        } else {
            Write-Host "Clean: $relativePath" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "ERROR: $relativePath - $($_.Exception.Message)" -ForegroundColor Red
        $stats.ErrorFiles++
    }
}

Write-Host "`n📊 Fix Complete!" -ForegroundColor Cyan
Write-Host "Total files: $($stats.TotalFiles)" -ForegroundColor White
Write-Host "Files fixed: $($stats.ProcessedFiles)" -ForegroundColor Green
Write-Host "Files already clean: $($stats.TotalFiles - $stats.ProcessedFiles - $stats.SkippedFiles - $stats.ErrorFiles)" -ForegroundColor Green
Write-Host "Files skipped: $($stats.SkippedFiles)" -ForegroundColor Yellow
Write-Host "Errors: $($stats.ErrorFiles)" -ForegroundColor Red