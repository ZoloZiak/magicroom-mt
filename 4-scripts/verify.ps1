# MagicRoom CI/CD Verification Script
Write-Host "--- Starting MagicRoom Verification ---" -ForegroundColor Cyan

# 1. Clean build
Write-Host "Step 1: Building project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) { 
    Write-Host "Build failed!" -ForegroundColor Red
    exit $LASTEXITCODE 
}

# 2. Unit Tests
Write-Host "Step 2: Running unit tests..." -ForegroundColor Yellow
npm run test
if ($LASTEXITCODE -ne 0) { 
    Write-Host "Unit tests failed!" -ForegroundColor Red
    exit $LASTEXITCODE 
}

# 3. Start Preview in background
Write-Host "Step 3: Running E2E tests..." -ForegroundColor Yellow
$previewProcess = Start-Process -FilePath "npx" -ArgumentList "astro", "preview", "--port", "4321" -PassThru -NoNewWindow
Start-Sleep -Seconds 5

# 4. E2E Tests
npx playwright test --project=chromium
$e2eExitCode = $LASTEXITCODE

# Cleanup
Stop-Process -Id $previewProcess.Id -Force

if ($e2eExitCode -ne 0) {
    Write-Host "E2E tests failed!" -ForegroundColor Red
    exit $e2eExitCode
}

Write-Host "--- Verification Successful! Ready to push. ---" -ForegroundColor Green
