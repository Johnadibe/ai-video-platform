# Quick Setup Guide

Follow these steps to get your AI Video Platform up and running in minutes.

## Prerequisites Check

```bash
# Check Node.js version (should be 18.17.0+)
node --version

# Check npm version (should be 9.0.0+)
npm --version

# Check Docker (optional but recommended)
docker --version
docker-compose --version
```

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Database
```bash
npm run docker:dev
```

### Step 3: Setup Database
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

### Step 4: Start Development Server
```bash
npm run dev
```

Visit **http://localhost:3000** 🎉

## 🔑 Getting API Keys

### HeyGen API Key

1. Go to [HeyGen](https://heygen.com)
2. Sign up for an account
3. Navigate to API Settings
4. Generate an API key
5. Add to `.env.local`:
   ```
   HEYGEN_API_KEY=your_key_here
   ```

### NextAuth Secret

Generate a secure secret:
```bash
openssl rand -base64 32
```

Add to `.env.local`:
```
NEXTAUTH_SECRET=generated_secret_here
```

## 📊 Access Database GUI

After running `npm run docker:dev`, access:

**Adminer**: http://localhost:8080
- System: PostgreSQL
- Server: postgres
- Username: postgres
- Password: postgres
- Database: ai_video_platform

**Prisma Studio**: 
```bash
npm run db:studio
```
Then visit: http://localhost:5555

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 npm run dev
```

### Database Connection Error
```bash
# Restart Docker containers
npm run docker:down
npm run docker:dev

# Reset database
npm run db:push
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

## 📱 Test on Mobile

1. Find your local IP:
   ```bash
   # On Mac/Linux
   ifconfig | grep "inet "
   
   # On Windows
   ipconfig
   ```

2. Update `.env.local`:
   ```
   NEXT_PUBLIC_APP_URL=http://YOUR_IP:3000
   ```

3. Visit `http://YOUR_IP:3000` on your phone

## ✅ Verification Checklist

- [ ] Dependencies installed (`node_modules` folder exists)
- [ ] Docker containers running (`docker ps` shows postgres and redis)
- [ ] Database schema created (no errors in terminal)
- [ ] Dev server running (http://localhost:3000 works)
- [ ] No console errors in browser
- [ ] Navigation works
- [ ] Adminer accessible (http://localhost:8080)

## 🎯 Next Steps

1. **Configure HeyGen API**
   - Add your API key to `.env.local`
   - Test API connection

2. **Customize Design**
   - Edit `src/config/site.ts`
   - Modify `tailwind.config.ts`

3. **Build Features**
   - Implement video generation
   - Add user authentication
   - Create dashboard pages

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [HeyGen API Docs](https://docs.heygen.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🆘 Need Help?

- Check the main [README.md](./README.md)
- Review [troubleshooting section](#-troubleshooting)
- Open an issue on GitHub
- Contact support team

---

**Happy Coding! 🚀**

