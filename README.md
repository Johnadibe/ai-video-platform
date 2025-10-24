# AI Video Platform - SaaS Application

A modern, production-ready SaaS platform for AI-powered video generation, built with Next.js 15, TypeScript, and integrated with HeyGen API.

## 🚀 Features

- **Next.js 15** with App Router and Server Components
- **TypeScript** for type safety
- **Tailwind CSS** with custom design tokens
- **Prisma ORM** with PostgreSQL
- **NextAuth.js** for authentication
- **Docker Support** for all environments (dev, test, qa, staging, prod)
- **Responsive Design** with mobile-first approach
- **SEO Optimized** with proper meta tags and Open Graph
- **API Routes** ready for HeyGen integration
- **Database Schema** for users, videos, and subscriptions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17.0 or higher
- **npm** 9.0.0 or higher
- **Docker** and **Docker Compose** (for running PostgreSQL)
- **Git**

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd ai-video-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file and update it with your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys and database credentials:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ai_video_platform?schema=public"
NEXTAUTH_SECRET="your-secret-key-here"
HEYGEN_API_KEY="your-heygen-api-key"
```

### 4. Start the Database

Start PostgreSQL and Redis using Docker Compose:

```bash
npm run docker:dev
```

This will start:
- PostgreSQL on port 5432
- Redis on port 6379
- Adminer (Database GUI) on port 8080

### 5. Set Up the Database

Generate Prisma client and run migrations:

```bash
npm run db:generate
npm run db:push
```

Optionally, seed the database with demo data:

```bash
npm run db:seed
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
├── prisma/                 # Database schema and migrations
│   ├── schema.prisma      # Prisma schema definition
│   └── seed.ts            # Database seeding script
├── public/                # Static assets
├── src/
│   ├── app/              # Next.js 15 App Router
│   │   ├── (marketing)/  # Marketing pages layout group
│   │   ├── api/          # API routes
│   │   ├── globals.css   # Global styles
│   │   └── layout.tsx    # Root layout
│   ├── components/       # React components
│   │   ├── ui/          # UI components (Button, etc.)
│   │   ├── navigation.tsx
│   │   └── footer.tsx
│   ├── config/           # Configuration files
│   │   └── site.ts       # Site configuration
│   ├── lib/              # Utility functions
│   │   ├── utils.ts      # Helper functions
│   │   └── prisma.ts     # Prisma client
│   ├── types/            # TypeScript type definitions
│   └── middleware.ts     # Next.js middleware for route protection
├── docker-compose.*.yml  # Docker configurations for each environment
├── Dockerfile            # Production Docker image
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🐳 Docker Environments

The project includes Docker Compose configurations for different environments:

### Development
```bash
npm run docker:dev
```

### Testing
```bash
npm run docker:test
```

### QA
```bash
npm run docker:qa
```

### Staging
```bash
npm run docker:staging
```

### Production
```bash
npm run docker:prod
```

To stop any environment:
```bash
npm run docker:down
```

## 🗄️ Database Management

### Prisma Commands

```bash
# Generate Prisma Client
npm run db:generate

# Push schema changes to database (development)
npm run db:push

# Create a new migration
npm run db:migrate

# Open Prisma Studio (Database GUI)
npm run db:studio

# Seed the database
npm run db:seed
```

### Access Database GUI

When running `npm run docker:dev`, you can access Adminer at:
- **URL**: http://localhost:8080
- **System**: PostgreSQL
- **Server**: postgres
- **Username**: postgres
- **Password**: postgres
- **Database**: ai_video_platform

## 🔐 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `NEXT_PUBLIC_APP_URL` | Application URL | `http://localhost:3000` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/db` |
| `NEXTAUTH_SECRET` | NextAuth.js secret key | `your-secret-key` |
| `HEYGEN_API_KEY` | HeyGen API key | `your-heygen-api-key` |

### Optional Variables

| Variable | Description |
|----------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS access key for S3 storage |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `STRIPE_SECRET_KEY` | Stripe secret key for payments |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID |

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Check TypeScript types |

## 🎨 Customization

### Tailwind CSS Theme

Edit `tailwind.config.ts` to customize:
- Colors
- Spacing
- Typography
- Breakpoints
- Animations

### Site Configuration

Edit `src/config/site.ts` to update:
- Site name and description
- Navigation links
- Footer sections
- Social media links

## 🔒 Authentication

The application uses NextAuth.js for authentication. Protected routes are defined in `src/middleware.ts`.

### Protected Routes
- `/dashboard`
- `/videos`
- `/settings`
- `/billing`

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Docker Production Deployment

```bash
# Build the production image
docker build -t ai-video-platform .

# Run with docker-compose
npm run docker:prod
```

### Environment-Specific Deployment

The project includes separate Docker Compose files for each environment. Make sure to:

1. Set environment variables in a `.env` file
2. Update database credentials
3. Configure proper domain names
4. Set up SSL certificates for production

## 🔧 Configuration Files

### Next.js Configuration (`next.config.js`)
- Image optimization settings
- Security headers
- Redirects and rewrites
- Remote patterns for images

### TypeScript Configuration (`tsconfig.json`)
- Path aliases (`@/*`)
- Strict type checking
- Target ES2020

### ESLint Configuration (`.eslintrc.json`)
- Next.js recommended rules
- TypeScript ESLint
- Prettier integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [HeyGen](https://heygen.com/)
- [Radix UI](https://www.radix-ui.com/)

## 📞 Support

For support, email support@aivideoplatform.com or join our Slack channel.

## 🗺️ Roadmap

- [x] Project setup and configuration
- [x] Database schema design
- [x] Marketing pages layout
- [ ] User authentication
- [ ] HeyGen API integration
- [ ] Video generation workflow
- [ ] Dashboard pages
- [ ] Payment integration (Stripe)
- [ ] User management
- [ ] Analytics integration
- [ ] Email notifications
- [ ] API documentation

---

Built with ❤️ by the AI Video Platform Team

