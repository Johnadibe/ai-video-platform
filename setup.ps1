# AI Video Platform - Setup Script (Windows PowerShell)
# This script automates the initial setup process

Write-Host "🚀 AI Video Platform - Setup Script" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js $nodeVersion detected" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18.17.0 or higher." -ForegroundColor Red
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm -v
    Write-Host "✅ npm $npmVersion detected" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not installed." -ForegroundColor Red
    exit 1
}

# Check if Docker is installed
$dockerAvailable = $false
try {
    $dockerVersion = docker --version
    Write-Host "✅ Docker detected" -ForegroundColor Green
    $dockerAvailable = $true
} catch {
    Write-Host "⚠️  Docker is not installed. You'll need to set up PostgreSQL manually." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📦 Step 1: Installing dependencies..." -ForegroundColor Cyan
npm install

Write-Host ""
Write-Host "🔧 Step 2: Setting up environment variables..." -ForegroundColor Cyan
if (-not (Test-Path .env.local)) {
    Copy-Item .env.example .env.local
    Write-Host "✅ Created .env.local from .env.example" -ForegroundColor Green
    Write-Host "⚠️  Please update .env.local with your actual API keys" -ForegroundColor Yellow
} else {
    Write-Host "⚠️  .env.local already exists, skipping..." -ForegroundColor Yellow
}

if ($dockerAvailable) {
    Write-Host ""
    Write-Host "🐳 Step 3: Starting Docker containers..." -ForegroundColor Cyan
    
    # Check if containers are already running
    $runningContainers = docker ps --format "{{.Names}}"
    if ($runningContainers -match "ai-video-platform") {
        Write-Host "⚠️  Docker containers are already running" -ForegroundColor Yellow
    } else {
        npm run docker:dev
        Write-Host "✅ Docker containers started" -ForegroundColor Green
        
        # Wait for PostgreSQL to be ready
        Write-Host "⏳ Waiting for PostgreSQL to be ready..." -ForegroundColor Cyan
        Start-Sleep -Seconds 5
    }
} else {
    Write-Host ""
    Write-Host "⚠️  Step 3: Docker not available. Please set up PostgreSQL manually." -ForegroundColor Yellow
    Write-Host "   Connection string: postgresql://postgres:postgres@localhost:5432/ai_video_platform"
}

Write-Host ""
Write-Host "📊 Step 4: Setting up database..." -ForegroundColor Cyan
npx prisma generate
npx prisma db push --accept-data-loss

Write-Host ""
Write-Host "🌱 Step 5: Seeding database..." -ForegroundColor Cyan
npm run db:seed

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Update .env.local with your actual API keys"
Write-Host "   2. Run 'npm run dev' to start the development server"
Write-Host "   3. Visit http://localhost:3000"
Write-Host ""
Write-Host "📚 Useful commands:" -ForegroundColor Cyan
Write-Host "   npm run dev          - Start development server"
Write-Host "   npm run docker:dev   - Start Docker containers"
Write-Host "   npm run db:studio    - Open Prisma Studio"
Write-Host ""
Write-Host "🔗 Access points:" -ForegroundColor Cyan
Write-Host "   Application:   http://localhost:3000"
Write-Host "   Adminer:       http://localhost:8080"
Write-Host "   Prisma Studio: npm run db:studio"
Write-Host ""
Write-Host "Happy coding! 🚀" -ForegroundColor Green

