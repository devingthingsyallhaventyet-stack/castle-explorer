# Remove ALL old inline navs from CastleCore site pages
# This script removes old <nav class="site-nav"> and <nav class="float-nav"> elements
# and ensures all pages have the new nav component

param(
    [switch]$TestOnly = $false,
    [switch]$ForceAll = $false
)

# Set location
Set-Location "C:\Users\Clawzisabot\.openclaw\workspace\castle-explorer"

# Counter variables
$filesProcessed = 0
$filesWithSiteNav = 0
$filesWithFloatNav = 0
$filesWithComponent = 0
$errors = @()

# Function to safely read file with UTF-8 encoding
function Read-FileUTF8($filePath) {
    return [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
}

# Function to safely write file with UTF-8 no BOM encoding
function Write-FileUTF8($filePath, $content) {
    [System.IO.File]::WriteAllText($filePath, $content, (New-Object System.Text.UTF8Encoding $false))
}

# Function to remove nav elements and add component if needed
function Process-HTMLFile($filePath) {
    try {
        $content = Read-FileUTF8 $filePath
        $originalContent = $content
        $changes = @()
        
        # Check what nav types are present before processing
        $hasSiteNav = $content -match '<nav\s+class="site-nav"'
        $hasFloatNav = $content -match '<nav\s+class="float-nav"[^>]*>'
        $hasComponent = $content -match '<div\s+id="site-nav"'
        
        if ($hasSiteNav) { $script:filesWithSiteNav++ }
        if ($hasFloatNav) { $script:filesWithFloatNav++ }
        if ($hasComponent) { $script:filesWithComponent++ }
        
        # Remove <nav class="site-nav">...</nav> blocks
        if ($hasSiteNav) {
            $content = $content -replace '(?s)<nav\s+class="site-nav"[^>]*>.*?</nav>', ''
            $changes += "Removed site-nav"
        }
        
        # Remove <nav class="float-nav">...</nav> blocks  
        if ($hasFloatNav) {
            $content = $content -replace '(?s)<nav\s+class="float-nav"[^>]*>.*?</nav>', ''
            $changes += "Removed float-nav"
        }
        
        # If no nav component exists, add it after <body> tag
        if (-not $hasComponent) {
            $componentHTML = '<div id="site-nav"></div><script src="/components/nav.js"></script>'
            
            # Try to add after <body> tag
            if ($content -match '(?s)<body[^>]*>') {
                $content = $content -replace '(<body[^>]*>)', "`$1`n$componentHTML"
                $changes += "Added nav component after <body>"
            }
            # Fallback: add before first major content element
            elseif ($content -match '(?s)(<(?:section|main|div\s+class="hero"|header)[^>]*>)') {
                $content = $content -replace '(<(?:section|main|div\s+class="hero"|header)[^>]*>)', "$componentHTML`n`$1"
                $changes += "Added nav component before content"
            }
            else {
                $changes += "Could not find suitable place for nav component"
            }
        }
        
        # Only write if content changed
        if ($content -ne $originalContent) {
            Write-FileUTF8 $filePath $content
            $script:filesProcessed++
            return "Changes: " + ($changes -join ", ")
        }
        else {
            return "No changes needed"
        }
    }
    catch {
        $script:errors += "Error processing ${filePath}: $($_.Exception.Message)"
        return "ERROR: $($_.Exception.Message)"
    }
}

# Function to verify file after processing
function Verify-ProcessedFile($filePath) {
    try {
        $content = Read-FileUTF8 $filePath
        
        $hasOldSiteNav = $content -match '<nav\s+class="site-nav"'
        $hasOldFloatNav = $content -match '<nav\s+class="float-nav"'
        $hasComponent = $content -match '<div\s+id="site-nav"'
        $hasStars = ($content | Select-String '★').Matches.Count
        
        $status = @()
        if ($hasComponent) { $status += "OK Component present" } else { $status += "ERROR Component MISSING" }
        if (-not $hasOldSiteNav -and -not $hasOldFloatNav) { $status += "OK Old navs removed" } else { $status += "ERROR Old navs still present" }
        if ($hasStars -gt 0) { $status += "OK Stars preserved ($hasStars)" } else { $status += "INFO No stars found" }
        
        return $status -join ", "
    }
    catch {
        return "ERROR verifying: $($_.Exception.Message)"
    }
}

# Test files first if TestOnly flag is set, otherwise test then process all
$baseDir = Get-Location
$testFiles = @(
    (Join-Path $baseDir "site\brodie-castle.html"),
    (Join-Path $baseDir "site\edinburgh-castle.html"), 
    (Join-Path $baseDir "site\warwick-castle.html")
)

if ($TestOnly) {
    Write-Host "=== TESTING MODE - Processing 3 test files only ===" -ForegroundColor Yellow
    Write-Host ""
    
    foreach ($testFile in $testFiles) {
        if (Test-Path $testFile) {
            Write-Host "Processing: $testFile" -ForegroundColor Cyan
            Write-Host "Before verification:"
            Verify-ProcessedFile $testFile
            
            $result = Process-HTMLFile $testFile
            Write-Host "Result: $result" -ForegroundColor Green
            
            Write-Host "After verification:"
            Verify-ProcessedFile $testFile
            Write-Host ""
        } else {
            Write-Host "Test file not found: $testFile" -ForegroundColor Red
        }
    }
} else {
    # First test the 3 files
    Write-Host "=== Testing 3 files first ===" -ForegroundColor Yellow
    Write-Host ""
    
    $testResults = @{}
    foreach ($testFile in $testFiles) {
        if (Test-Path $testFile) {
            Write-Host "Testing: $testFile" -ForegroundColor Cyan
            $beforeVerify = Verify-ProcessedFile $testFile
            Write-Host "Before: $beforeVerify"
            
            $result = Process-HTMLFile $testFile
            Write-Host "Result: $result" -ForegroundColor Green
            
            $afterVerify = Verify-ProcessedFile $testFile
            Write-Host "After: $afterVerify"
            Write-Host ""
            
            $testResults[$testFile] = @{
                Before = $beforeVerify
                Result = $result
                After = $afterVerify
            }
        }
    }
    
    # Ask user to continue or auto-continue with ForceAll
    Write-Host "=== Test Results Summary ===" -ForegroundColor Yellow
    foreach ($file in $testResults.Keys) {
        Write-Host "$file : $($testResults[$file].Result)" -ForegroundColor Cyan
    }
    Write-Host ""
    
    $continue = $false
    if ($ForceAll) {
        Write-Host "ForceAll flag set - proceeding with all files automatically" -ForegroundColor Green
        $continue = $true
    } else {
        $continueInput = Read-Host "Test completed. Continue with all files? (y/n)"
        $continue = ($continueInput -eq 'y' -or $continueInput -eq 'Y')
    }
    
    if ($continue) {
        Write-Host ""
        Write-Host "=== Processing all HTML files in site/ directory ===" -ForegroundColor Yellow
        Write-Host ""
        
        # Reset counters for full run
        $filesProcessed = 0
        $filesWithSiteNav = 0
        $filesWithFloatNav = 0
        $filesWithComponent = 0
        $errors = @()
        
        $allFiles = Get-ChildItem -Path "site" -Filter "*.html"
        $totalFiles = $allFiles.Count
        
        Write-Host "Found $totalFiles HTML files to process..."
        Write-Host ""
        
        $processed = 0
        foreach ($file in $allFiles) {
            $processed++
            if ($processed % 100 -eq 0 -or $processed -eq $totalFiles) {
                Write-Host "Progress: $processed / $totalFiles" -ForegroundColor Green
            }
            
            $result = Process-HTMLFile $file.FullName
            # Only show errors and first few successes
            if ($result -like "ERROR:*" -or $processed -le 5) {
                Write-Host "$($file.Name): $result"
            }
        }
    } else {
        Write-Host "Aborted by user" -ForegroundColor Red
        exit 0
    }
}

# Final report
Write-Host ""
Write-Host "=== FINAL REPORT ===" -ForegroundColor Yellow
Write-Host "Files processed: $filesProcessed"
Write-Host "Files with site-nav found: $filesWithSiteNav"
Write-Host "Files with float-nav found: $filesWithFloatNav"  
Write-Host "Files with component found: $filesWithComponent"
Write-Host "Errors: $($errors.Count)"

if ($errors.Count -gt 0) {
    Write-Host ""
    Write-Host "Errors encountered:" -ForegroundColor Red
    foreach ($error in $errors) {
        Write-Host "  $error" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Script completed!" -ForegroundColor Green