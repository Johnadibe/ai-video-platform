# 🚀 Getting Started with AI Video Platform

Welcome! This guide will help you get your AI Video Platform up and running in just a few minutes.

## 📋 Quick Checklist

Before you begin, make sure you have:
- [ ] Node.js 18.17.0 or higher installed
- [ ] npm 9.0.0 or higher installed
- [ ] Docker Desktop installed (optional but recommended)
- [ ] A code editor (VS Code recommended)
- [ ] Basic knowledge of React and Next.js

## 🎯 Two Ways to Get Started

### Option 1: Automated Setup (Recommended) ⚡

**On Windows (PowerShell):**
```powershell
.\setup.ps1
```

**On Mac/Linux (Terminal):**
```bash
chmod +x setup.sh
./setup.sh
```

This will automatically:
- Install all dependencies
- Set up environment variables
- Start Docker containers
- Initialize the database
- Seed demo data

### Option 2: Manual Setup 🔧

Follow these steps if you prefer manual control:

#### Step 1: Install Dependencies
```bash
npm install
```

#### Step 2: Set Up Environment
```bash
# Copy environment file
cp .env.example .env.local

# Edit .env.local with your values
# You can use any text editor
code .env.local  # VS Code
notepad .env.local  # Windows Notepad
```

**Required values in `.env.local`:**
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ai_video_platform?schema=public"
NEXTAUTH_SECRET="your-secret-key-here"  # Generate: openssl rand -base64 32
HEYGEN_API_KEY="your-heygen-api-key"    # Get from HeyGen dashboard
```

#### Step 3: Start Database
```bash
npm run docker:dev
```

This starts:
- ✅ PostgreSQL on port 5432
- ✅ Redis on port 6379
- ✅ Adminer (DB GUI) on port 8080

#### Step 4: Initialize Database
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with demo data (optional)
npm run db:seed
```

#### Step 5: Start Development Server
```bash
npm run dev
```

## 🎉 Success! What's Next?

Your application is now running!

### Access Your Application

| Service | URL | Credentials |
|---------|-----|-------------|
| **Main App** | http://localhost:3000 | - |
| **Adminer (DB GUI)** | http://localhost:8080 | server: postgres<br>user: postgres<br>pass: postgres<br>db: ai_video_platform |
| **Prisma Studio** | Run `npm run db:studio` | - |

### First Things to Try

1. **Explore the Homepage**
   - Visit http://localhost:3000
   - Check out the responsive design (resize your browser)
   - Try the mobile menu

2. **Check the Database**
   - Open http://localhost:8080
   - Login to Adminer
   - Explore the tables and demo data

3. **Open Prisma Studio**
   ```bash
   npm run db:studio
   ```
   - Visit http://localhost:5555
   - Browse and edit data visually

## 🔑 Getting Your API Keys

### HeyGen API Key

1. Go to [HeyGen](https://app.heygen.com)
2. Sign up or log in
3. Navigate to: **Settings** → **API Keys**
4. Click **Generate New Key**
5. Copy the key and add to `.env.local`:
   ```
   HEYGEN_API_KEY=your_key_here
   ```

### NextAuth Secret

Generate a secure random string:

**Mac/Linux:**
```bash
openssl rand -base64 32
```

**Windows (PowerShell):**
```powershell
-join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | % {[char]$_})
```

**Or use online tool:**
- https://generate-secret.vercel.app/32

Add to `.env.local`:
```
NEXTAUTH_SECRET=your_generated_secret
```

## 📁 Understanding the Project Structure

```
ai-video-platform/
│
├── 📂 src/
│   ├── app/              # Next.js pages and routes
│   │   ├── (marketing)/  # Marketing pages (homepage, etc.)
│   │   ├── api/          # API endpoints
│   │   └── layout.tsx    # Root layout
│   │
│   ├── components/       # Reusable React components
│   │   ├── ui/          # UI components (Button, etc.)
│   │   ├── navigation.tsx
│   │   └── footer.tsx
│   │
│   ├── lib/             # Utility functions
│   │   ├── utils.ts     # Helper functions
│   │   └── prisma.ts    # Database client
│   │
│   ├── config/          # Configuration files
│   │   └── site.ts      # Site settings
│   │
│   └── types/           # TypeScript types
│
├── 📂 prisma/           # Database
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Demo data
│
├── 📂 public/           # Static files
│
└── 📄 Configuration Files
    ├── package.json           # Dependencies
    ├── next.config.js         # Next.js config
    ├── tailwind.config.ts     # Tailwind CSS config
    ├── tsconfig.json          # TypeScript config
    └── docker-compose.*.yml   # Docker configs
```

## 🛠️ Essential Commands

### Development
```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
```

### Database
```bash
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema changes
npm run db:migrate   # Create migration
npm run db:studio    # Open Prisma Studio GUI
npm run db:seed      # Seed demo data
```

### Docker
```bash
npm run docker:dev   # Start dev containers
npm run docker:down  # Stop all containers
npm run docker:test  # Start test containers
```

### Code Quality
```bash
npm run lint         # Check for errors
npm run format       # Format code
npm run type-check   # Check TypeScript
```

## 🎨 Customizing Your App

### Change Site Name and Description

Edit `src/config/site.ts`:
```typescript
export const siteConfig = {
  name: 'Your App Name',
  description: 'Your description here',
  // ... more settings
};
```

### Modify Colors and Design

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',  // Your brand color
      },
    },
  },
},
```

### Update Navigation Links

Edit `src/config/site.ts`:
```typescript
export const navigation = [
  { title: 'Features', href: '/features' },
  { title: 'Your Link', href: '/your-page' },
  // Add more links
];
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find and kill process on port 3000
npx kill-port 3000

# Or use a different port
PORT=3001 npm run dev
```

### Database Connection Error
```bash
# Check if Docker is running
docker ps

# Restart containers
npm run docker:down
npm run docker:dev

# Wait 5 seconds, then try again
npm run db:push
```

### "Module not found" Error
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Docker Not Starting
```bash
# Check Docker Desktop is running
docker --version

# Check for port conflicts
# Make sure ports 3000, 5432, 6379, 8080 are free

# View Docker logs
docker-compose -f docker-compose.dev.yml logs
```

### Prisma Issues
```bash
# Regenerate Prisma client
npx prisma generate

# Reset database (WARNING: deletes all data)
npx prisma db push --force-reset
```

## 📱 Testing on Mobile

1. **Find your local IP address:**

   **Windows:**
   ```cmd
   ipconfig
   ```
   Look for "IPv4 Address"

   **Mac/Linux:**
   ```bash
   ifconfig | grep "inet "
   ```

2. **Update environment:**
   ```env
   NEXT_PUBLIC_APP_URL=http://YOUR_IP:3000
   ```

3. **Make sure devices are on same network**

4. **Visit on phone:** `http://YOUR_IP:3000`

## 🚀 Next Steps

Now that you're set up, here's what to do next:

### 1. Understand the Codebase
- [ ] Read through `README.md`
- [ ] Explore the file structure
- [ ] Review the Prisma schema
- [ ] Check out the example components

### 2. Make Your First Change
- [ ] Update the homepage title
- [ ] Change the primary color
- [ ] Add your own navigation link
- [ ] Customize the footer

### 3. Build Features
- [ ] Implement user authentication
- [ ] Integrate HeyGen API
- [ ] Create dashboard pages
- [ ] Add video generation workflow

### 4. Learn the Tools
- [ ] [Next.js Documentation](https://nextjs.org/docs)
- [ ] [Prisma Documentation](https://www.prisma.io/docs)
- [ ] [Tailwind CSS](https://tailwindcss.com/docs)
- [ ] [HeyGen API Docs](https://docs.heygen.com)

## 📚 Helpful Resources

### Documentation
- [README.md](./README.md) - Complete documentation
- [SETUP.md](./SETUP.md) - Quick setup guide
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - What's included
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guide

### Learning Resources
- **Next.js 15**: https://nextjs.org/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Prisma**: https://www.prisma.io/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev

### Tools
- **VS Code**: Recommended editor
- **Docker Desktop**: Container management
- **Postman**: API testing
- **Figma**: Design (if needed)

## 💡 Pro Tips

1. **Use VS Code Extensions**
   - Open Command Palette: `Ctrl+Shift+P` (Win) or `Cmd+Shift+P` (Mac)
   - Type: "Show Recommended Extensions"
   - Install all recommended extensions

2. **Enable Auto-Save**
   - VS Code: File → Auto Save

3. **Use Prisma Studio**
   - Easiest way to view and edit database
   - Run: `npm run db:studio`

4. **Keep Docker Running**
   - Docker containers remember their state
   - No need to restart unless there's an issue

5. **Check Logs Often**
   - Terminal shows helpful error messages
   - Browser console shows client-side errors

## 🆘 Need Help?

### Check These First
- [ ] Is Docker running?
- [ ] Are all ports available?
- [ ] Is `.env.local` configured?
- [ ] Did dependencies install correctly?

### Still Stuck?
- 📖 Read the [README.md](./README.md)
- 🔍 Check existing GitHub issues
- 💬 Ask on our Discord/Slack
- 📧 Email: support@aivideoplatform.com

## ✅ Setup Verification Checklist

Before you start coding, verify everything is working:

- [ ] `npm run dev` starts without errors
- [ ] http://localhost:3000 loads the homepage
- [ ] Navigation menu works
- [ ] Footer displays correctly
- [ ] http://localhost:8080 opens Adminer
- [ ] Database has tables (users, videos, etc.)
- [ ] No errors in browser console
- [ ] `npm run lint` shows no errors
- [ ] Prisma Studio opens with `npm run db:studio`

## 🎊 You're Ready!

Congratulations! Your AI Video Platform is set up and ready for development.

**Happy Coding! 🚀**

---

*Need help? Check [README.md](./README.md) or [SETUP.md](./SETUP.md)*

