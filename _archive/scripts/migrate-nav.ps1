# CastleCore Nav & Footer Migration Script
Write-Host "🏰 CastleCore Nav & Footer Migration" -ForegroundColor Cyan

# Statistics
$stats = @{
    TotalFiles = 0
    ProcessedFiles = 0
    SkippedFiles = 0
    CinematicFiles = 0
    ErrorFiles = 0
}

# Get all HTML files
Write-Host "Finding HTML files..." -ForegroundColor Yellow
$htmlFiles = Get-ChildItem -Path "." -Filter "*.html" -Recurse | Where-Object {
    $_.FullName -notmatch "node_modules|\.wrangler|\.git"
}

$stats.TotalFiles = $htmlFiles.Count
Write-Host "Found $($stats.TotalFiles) HTML files" -ForegroundColor Green

# Function to determine theme
function Get-NavTheme {
    param($content, $relativePath)
    
    if ($content -match 'rgba\(15,22,40') {
        return "dark"
    }
    
    $pathParts = $relativePath -split '[\\/]'
    if ($pathParts.Length -gt 1) {
        $subdir = $pathParts[0].ToLower()
        $filename = [System.IO.Path]::GetFileNameWithoutExtension($pathParts[-1]).ToLower()
        
        if ($subdir -in @("scotland", "england", "wales", "ireland") -and $filename -ne $subdir) {
            return "dark"
        }
    }
    
    return "light"
}

# Function to clean content
function Remove-NavFooterContent {
    param($content)
    
    # Remove nav HTML
    $content = $content -replace '(?s)<nav\s+class="nav".*?</nav>', ''
    
    # Remove mobile menu HTML  
    $content = $content -replace '(?s)<div\s+class="mobile-menu".*?</div>', ''
    
    # Remove footer HTML
    $content = $content -replace '(?s)<footer.*?</footer>', ''
    
    # Remove nav-related CSS
    $content = $content -replace '(?s)\.nav\{[^}]*\}', ''
    $content = $content -replace '(?s)\.nav-[^{]*\{[^}]*\}', ''
    $content = $content -replace '(?s)\.mega-[^{]*\{[^}]*\}', ''
    $content = $content -replace '(?s)\.mobile-menu[^{]*\{[^}]*\}', ''
    $content = $content -replace '(?s)\.hamburger[^{]*\{[^}]*\}', ''
    $content = $content -replace '(?s)\.mob-[^{]*\{[^}]*\}', ''
    
    # Remove footer-related CSS
    $content = $content -replace '(?s)footer[^{]*\{[^}]*\}', ''
    $content = $content -replace '(?s)\.footer-[^{]*\{[^}]*\}', ''
    
    return $content
}

# Function to insert nav component
function Add-NavComponent {
    param($content, $theme)
    
    $themeAttr = if ($theme -eq "dark") { ' data-theme="dark"' } else { '' }
    $navComponent = "<div id=""site-nav""></div><script src=""/components/nav.js""$themeAttr></script>"
    
    if ($content -match '(<body[^>]*>)') {
        $bodyTag = $matches[1]
        $content = $content -replace [regex]::Escape($bodyTag), "$bodyTag`r`n$navComponent"
    }
    
    return $content
}

# Function to insert footer component
function Add-FooterComponent {
    param($content)
    
    $footerComponent = "<div id=""site-footer""></div><script src=""/components/footer.js""></script>"
    $content = $content -replace '</body>', "$footerComponent`r`n</body>"
    
    return $content
}

# Process files
Write-Host "Processing files..." -ForegroundColor Yellow

foreach ($file in $htmlFiles) {
    $relativePath = $file.FullName.Substring($PWD.Path.Length + 1)
    Write-Host "Processing: $relativePath" -ForegroundColor Gray
    
    try {
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        
        if ($content -match 'float-nav') {
            Write-Host "  SKIPPED (cinematic page)" -ForegroundColor Yellow
            $stats.CinematicFiles++
            $stats.SkippedFiles++
            continue
        }
        
        $theme = Get-NavTheme -content $content -relativePath $relativePath
        Write-Host "  Theme: $theme" -ForegroundColor Magenta
        
        $cleanContent = Remove-NavFooterContent -content $content
        $updatedContent = Add-NavComponent -content $cleanContent -theme $theme
        $finalContent = Add-FooterComponent -content $updatedContent
        
        $finalContent | Out-File -FilePath $file.FullName -Encoding UTF8 -NoNewline
        
        Write-Host "  SUCCESS" -ForegroundColor Green
        $stats.ProcessedFiles++
    }
    catch {
        Write-Host "  ERROR: $($_.Exception.Message)" -ForegroundColor Red
        $stats.ErrorFiles++
    }
}

# Show results
Write-Host "`nMigration Complete!" -ForegroundColor Cyan
Write-Host "Total files: $($stats.TotalFiles)" -ForegroundColor White
Write-Host "Processed: $($stats.ProcessedFiles)" -ForegroundColor Green
Write-Host "Cinematic skipped: $($stats.CinematicFiles)" -ForegroundColor Yellow
Write-Host "Errors: $($stats.ErrorFiles)" -ForegroundColor Red