# CastleCore Nav & Footer Migration Script
# This script converts ~2,100 HTML pages to use shared nav/footer components

Write-Host "🏰 CastleCore Nav & Footer Migration" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

# Statistics
$stats = @{
    TotalFiles = 0
    ProcessedFiles = 0
    SkippedFiles = 0
    CinematicFiles = 0
    ErrorFiles = 0
}

# Get all HTML files, excluding certain directories
Write-Host "`n📁 Finding HTML files..." -ForegroundColor Yellow

$htmlFiles = Get-ChildItem -Path "." -Filter "*.html" -Recurse | Where-Object {
    $_.FullName -notmatch "node_modules|\.wrangler|\.git"
}

$stats.TotalFiles = $htmlFiles.Count
Write-Host "Found $($stats.TotalFiles) HTML files" -ForegroundColor Green

# Function to determine theme
function Get-NavTheme {
    param($content, $relativePath)
    
    # Check for dark nav CSS (rgba(15,22,40))
    if ($content -match "rgba\(15,22,40") {
        return "dark"
    }
    
    # Check if in subdirectory but not country-level page
    $pathParts = $relativePath -split "[\\/]"
    if ($pathParts.Length -gt 1) {
        $subdir = $pathParts[0].ToLower()
        $filename = [System.IO.Path]::GetFileNameWithoutExtension($pathParts[-1]).ToLower()
        
        # If it's in scotland/, england/, wales/, ireland/ but NOT the country page itself
        if ($subdir -in @("scotland", "england", "wales", "ireland") -and $filename -ne $subdir) {
            return "dark"
        }
    }
    
    return "light"
}

# Function to clean content
function Remove-NavFooterContent {
    param($content)
    
    # Remove nav HTML (from <nav class="nav"> to </nav>)
    $content = $content -replace '(?s)<nav\s+class="nav".*?</nav>', ''
    
    # Remove mobile menu HTML (from <div class="mobile-menu"> to </div>)
    $content = $content -replace '(?s)<div\s+class="mobile-menu".*?</div>', ''
    
    # Remove footer HTML (from <footer> to </footer>)
    $content = $content -replace '(?s)<footer.*?</footer>', ''
    
    # Remove nav-related CSS from <style> blocks
    # This is complex because we need to remove specific CSS rules while preserving others
    $content = $content -replace '(?s)\.nav\{[^}]*\}', ''
    $content = $content -replace '(?s)\.nav-[^{]*\{[^}]*\}', ''
    $content = $content -replace '(?s)\.mega-[^{]*\{[^}]*\}', ''
    $content = $content -replace '(?s)\.mobile-menu[^{]*\{[^}]*\}', ''
    $content = $content -replace '(?s)\.hamburger[^{]*\{[^}]*\}', ''
    $content = $content -replace '(?s)\.mob-[^{]*\{[^}]*\}', ''
    
    # Remove footer-related CSS
    $content = $content -replace '(?s)footer[^{]*\{[^}]*\}', ''
    $content = $content -replace '(?s)\.footer-[^{]*\{[^}]*\}', ''
    
    # Clean up any double newlines left by removals
    $content = $content -replace "`r?`n`r?`n`r?`n+", "`r`n`r`n"
    
    return $content
}

# Function to insert nav component
function Add-NavComponent {
    param($content, $theme)
    
    $themeAttr = if ($theme -eq "dark") { ' data-theme="dark"' } else { '' }
    $navComponent = "<div id=`"site-nav`"></div><script src=`"/components/nav.js`"$themeAttr></script>"
    
    # Find the opening <body> tag and insert after it
    if ($content -match '(<body[^>]*>)') {
        $bodyTag = $matches[1]
        $content = $content -replace [regex]::Escape($bodyTag), "$bodyTag`r`n$navComponent"
    }
    else {
        # Fallback: insert at the start of body content
        $content = $content -replace '(<body[^>]*>)', "`$1`r`n$navComponent"
    }
    
    return $content
}

# Function to insert footer component  
function Add-FooterComponent {
    param($content)
    
    $footerComponent = "<div id=`"site-footer`"></div><script src=`"/components/footer.js`"></script>"
    
    # Insert before closing </body> tag
    $content = $content -replace '</body>', "$footerComponent`r`n</body>"
    
    return $content
}

# Process each file
Write-Host "`n🔄 Processing files..." -ForegroundColor Yellow

foreach ($file in $htmlFiles) {
    $relativePath = $file.FullName.Substring($PWD.Path.Length + 1)
    Write-Host "Processing: $relativePath" -ForegroundColor Gray
    
    try {
        # Read file content
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        
        # Check if it's a cinematic page (contains float-nav)
        if ($content -match 'float-nav') {
            Write-Host "  ⏭️  SKIPPED (cinematic page)" -ForegroundColor Yellow
            $stats.CinematicFiles++
            $stats.SkippedFiles++
            continue
        }
        
        # Determine theme
        $theme = Get-NavTheme -content $content -relativePath $relativePath
        Write-Host "  🎨 Theme: $theme" -ForegroundColor Magenta
        
        # Remove existing nav/footer content and CSS
        $cleanContent = Remove-NavFooterContent -content $content
        
        # Add nav component
        $updatedContent = Add-NavComponent -content $cleanContent -theme $theme
        
        # Add footer component
        $finalContent = Add-FooterComponent -content $updatedContent
        
        # Write back to file
        $finalContent | Out-File -FilePath $file.FullName -Encoding UTF8 -NoNewline
        
        Write-Host "  ✅ Migrated successfully" -ForegroundColor Green
        $stats.ProcessedFiles++
    }
    catch {
        Write-Host "  ❌ ERROR: $($_.Exception.Message)" -ForegroundColor Red
        $stats.ErrorFiles++
    }
}

# Display final statistics
Write-Host "`n📊 Migration Complete!" -ForegroundColor Cyan
Write-Host "=====================" -ForegroundColor Cyan
Write-Host "Total files found: $($stats.TotalFiles)" -ForegroundColor White
Write-Host "Files processed: $($stats.ProcessedFiles)" -ForegroundColor Green
Write-Host "Cinematic pages skipped: $($stats.CinematicFiles)" -ForegroundColor Yellow  
Write-Host "Other files skipped: $($stats.SkippedFiles - $stats.CinematicFiles)" -ForegroundColor Yellow
Write-Host "Files with errors: $($stats.ErrorFiles)" -ForegroundColor Red

if ($stats.ErrorFiles -eq 0) {
    Write-Host "`n🎉 Migration completed successfully! All files processed." -ForegroundColor Green
} else {
    Write-Host "`n⚠️  Migration completed with some errors. Check the output above." -ForegroundColor Yellow
}

Write-Host "`n📝 Next steps:" -ForegroundColor Cyan
Write-Host "1. Test a few pages to verify nav/footer components work correctly" -ForegroundColor White
Write-Host "2. Run git add -A && git commit && git push to deploy changes" -ForegroundColor White
Write-Host "3. Purge Cloudflare cache to see updates live" -ForegroundColor White