Set-Location $PSScriptRoot
$token = (Get-Content ".cloudflare-cache-token").Trim()
$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}
$body = '{"purge_everything":true}'
$response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/9ffabb3350211a965824e7acf4e6054e/purge_cache" -Headers $headers -Method Post -Body $body
Write-Host "Cache purged successfully: $($response.success)"