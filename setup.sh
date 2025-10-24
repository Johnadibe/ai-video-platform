#!/bin/bash

# AI Video Platform - Setup Script
# This script automates the initial setup process

set -e

echo "🚀 AI Video Platform - Setup Script"
echo "===================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18.17.0 or higher.${NC}"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version must be 18 or higher. Current version: $(node -v)${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node -v) detected${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ npm $(npm -v) detected${NC}"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${YELLOW}⚠️  Docker is not installed. You'll need to set up PostgreSQL manually.${NC}"
    DOCKER_AVAILABLE=false
else
    echo -e "${GREEN}✅ Docker $(docker --version | cut -d' ' -f3 | cut -d',' -f1) detected${NC}"
    DOCKER_AVAILABLE=true
fi

echo ""
echo "📦 Step 1: Installing dependencies..."
npm install

echo ""
echo "🔧 Step 2: Setting up environment variables..."
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo -e "${GREEN}✅ Created .env.local from .env.example${NC}"
    echo -e "${YELLOW}⚠️  Please update .env.local with your actual API keys${NC}"
else
    echo -e "${YELLOW}⚠️  .env.local already exists, skipping...${NC}"
fi

if [ "$DOCKER_AVAILABLE" = true ]; then
    echo ""
    echo "🐳 Step 3: Starting Docker containers..."
    
    # Check if containers are already running
    if docker ps | grep -q "ai-video-platform"; then
        echo -e "${YELLOW}⚠️  Docker containers are already running${NC}"
    else
        npm run docker:dev
        echo -e "${GREEN}✅ Docker containers started${NC}"
        
        # Wait for PostgreSQL to be ready
        echo "⏳ Waiting for PostgreSQL to be ready..."
        sleep 5
    fi
else
    echo ""
    echo -e "${YELLOW}⚠️  Step 3: Docker not available. Please set up PostgreSQL manually.${NC}"
    echo "   Connection string: postgresql://postgres:postgres@localhost:5432/ai_video_platform"
fi

echo ""
echo "📊 Step 4: Setting up database..."
npx prisma generate
npx prisma db push --accept-data-loss

echo ""
echo "🌱 Step 5: Seeding database..."
npm run db:seed

echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "🎉 Next steps:"
echo "   1. Update .env.local with your actual API keys"
echo "   2. Run 'npm run dev' to start the development server"
echo "   3. Visit http://localhost:3000"
echo ""
echo "📚 Useful commands:"
echo "   npm run dev          - Start development server"
echo "   npm run docker:dev   - Start Docker containers"
echo "   npm run db:studio    - Open Prisma Studio"
echo ""
echo "🔗 Access points:"
echo "   Application:  http://localhost:3000"
echo "   Adminer:      http://localhost:8080"
echo "   Prisma Studio: npm run db:studio"
echo ""
echo "Happy coding! 🚀"

