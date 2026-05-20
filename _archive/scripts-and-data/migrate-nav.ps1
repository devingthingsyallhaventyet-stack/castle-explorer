# PowerShell script to migrate HTML files to use shared nav/footer components

function Migrate-HTMLFile {
    param(
        [string]$filePath
    )
    
    Write-Host "Migrating: $filePath"
    
    # Read the file content
    $content = Get-Content $filePath -Raw -Encoding UTF8
    
    # Replace nav section (from <nav class="nav"> to </nav>)
    $content = $content -replace '(?s)<nav class="nav">.*?</nav>', '<div id="site-nav"></div><script src="/components/nav.js"></script>'
    
    # Remove mobile menu (from <div class="mobile-menu"> to the closing </div> before next section)
    $content = $content -replace '(?s)<div class="mobile-menu">.*?</div>\s*(?=<section|<!\-\-)', ''
    
    # Add footer component before closing </body> if no footer exists
    if ($content -notmatch '<footer') {
        $content = $content -replace '</body>', '<div id="site-footer"></div><script src="/components/footer.js"></script></body>'
    } else {
        # Replace existing footer with component
        $content = $content -replace '(?s)<footer.*?</footer>', '<div id="site-footer"></div><script src="/components/footer.js"></script>'
    }
    
    # Write the updated content back to file
    $content | Out-File $filePath -Encoding UTF8 -NoNewline
    
    Write-Host "✓ Migrated: $filePath"
}

# Files to migrate
$files = @(
    "wales.html",
    "england.html", 
    "ireland.html",
    "scotland.html",
    "collection.html",
    "trail.html",
    "region.html"
)

# Migrate each file
foreach ($file in $files) {
    if (Test-Path $file) {
        Migrate-HTMLFile $file
    } else {
        Write-Host "⚠ File not found: $file"
    }
}

Write-Host "Migration complete!"