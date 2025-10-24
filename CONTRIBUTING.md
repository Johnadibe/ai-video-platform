# Contributing to AI Video Platform

First off, thank you for considering contributing to AI Video Platform! It's people like you that make this project such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed and what behavior you expected**
* **Include screenshots if relevant**
* **Include your environment details** (OS, Node version, npm version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a detailed description of the suggested enhancement**
* **Explain why this enhancement would be useful**
* **List any alternative solutions you've considered**

### Pull Requests

* Fill in the required template
* Follow the code style guidelines
* Include appropriate test cases
* Update documentation as needed
* End all files with a newline

## Development Setup

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher
- Docker and Docker Compose (optional but recommended)

### Setup Steps

1. Fork and clone the repository
```bash
git clone https://github.com/your-username/ai-video-platform.git
cd ai-video-platform
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

4. Start the database
```bash
npm run docker:dev
```

5. Set up the database
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

6. Start the development server
```bash
npm run dev
```

## Code Style

We use ESLint and Prettier to maintain code quality and consistency.

### Running Linters

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format

# Check TypeScript types
npm run type-check
```

### Code Style Guidelines

- Use TypeScript for all new code
- Follow the existing code structure
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use async/await instead of callbacks

### Component Guidelines

- Use functional components with hooks
- Keep components small and reusable
- Use TypeScript interfaces for props
- Add JSDoc comments for complex components
- Follow the file structure:
  ```tsx
  // Imports
  import { ... } from '...'
  
  // Types
  interface Props {
    ...
  }
  
  // Component
  export function Component({ ... }: Props) {
    ...
  }
  ```

### File Naming Conventions

- React components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Types: `camelCase.ts` or `types.ts`
- API routes: `route.ts`
- Pages: `page.tsx`

## Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### Commit Message Format

```
type(scope): subject

body

footer
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Example:**
```
feat(video): add video generation API integration

- Implement HeyGen API client
- Add video generation endpoint
- Update video model schema

Closes #123
```

## Testing

Before submitting a pull request, make sure:

- [ ] All existing tests pass
- [ ] You've added tests for new functionality
- [ ] Code follows the style guidelines
- [ ] No linter errors
- [ ] Documentation is updated

### Running Tests

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format checking
npm run format:check
```

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── (marketing)/  # Marketing pages
│   ├── api/          # API routes
│   └── layout.tsx    # Root layout
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   └── ...          # Feature components
├── config/          # Configuration files
├── lib/             # Utility functions
└── types/           # TypeScript types
```

## Database Changes

When making database changes:

1. Update `prisma/schema.prisma`
2. Generate Prisma client: `npm run db:generate`
3. Create migration: `npm run db:migrate`
4. Update seed file if needed
5. Document changes in PR description

## Documentation

* Update README.md if needed
* Add JSDoc comments for public APIs
* Update SETUP.md for setup changes
* Create/update examples for new features

## Questions?

Feel free to:
- Open an issue for questions
- Join our community Discord
- Email us at dev@aivideoplatform.com

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉

