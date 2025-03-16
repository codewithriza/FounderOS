#!/bin/bash

# ============================================
# FounderOS - Setup Script
# Automates the initial development environment setup
# ============================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo ""
echo -e "${PURPLE}⚡ FounderOS Setup${NC}"
echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check Node.js
echo -e "${BLUE}▸ Checking Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js is not installed. Please install Node.js 18+${NC}"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}✗ Node.js 18+ is required. Current version: $(node -v)${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js $(node -v) detected${NC}"

# Check npm
echo -e "${BLUE}▸ Checking npm...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗ npm is not installed.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ npm $(npm -v) detected${NC}"

# Install dependencies
echo ""
echo -e "${BLUE}▸ Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"

# Setup environment variables
echo ""
echo -e "${BLUE}▸ Setting up environment variables...${NC}"
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo -e "${GREEN}✓ Created .env.local from .env.example${NC}"
    echo -e "${YELLOW}⚠ Please update .env.local with your API keys${NC}"
else
    echo -e "${YELLOW}⚠ .env.local already exists, skipping...${NC}"
fi

# Generate Prisma client
echo ""
echo -e "${BLUE}▸ Generating Prisma client...${NC}"
npx prisma generate 2>/dev/null || echo -e "${YELLOW}⚠ Prisma generate skipped (DATABASE_URL not configured)${NC}"
echo -e "${GREEN}✓ Prisma client ready${NC}"

# Setup Husky (git hooks)
echo ""
echo -e "${BLUE}▸ Setting up Git hooks...${NC}"
if [ -d .git ]; then
    npx husky init 2>/dev/null || true
    echo -e "${GREEN}✓ Husky initialized${NC}"
else
    echo -e "${YELLOW}⚠ Not a git repository, skipping Husky setup${NC}"
fi

# Done!
echo ""
echo -e "${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ FounderOS is ready!${NC}"
echo ""
echo -e "Next steps:"
echo -e "  1. Update ${YELLOW}.env.local${NC} with your API keys"
echo -e "  2. Run ${YELLOW}npm run dev${NC} to start the dev server"
echo -e "  3. Open ${BLUE}http://localhost:3000${NC}"
echo ""
echo -e "${PURPLE}Happy building! 🚀${NC}"
echo ""
