# Contributing to FounderOS

First off, thank you for considering contributing to FounderOS! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Convention](#commit-convention)

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- PostgreSQL (or a Supabase account)

### Setup

```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/founderos.git
cd founderos

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your API keys in .env.local

# 4. Set up the database
npx prisma db push
npx prisma generate

# 5. Start the development server
npm run dev
```

## Development Workflow

1. Create a new branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. Make your changes and test them locally.

3. Run linting and type checks:
   ```bash
   npm run lint
   npx tsc --noEmit
   ```

4. Commit your changes following the [commit convention](#commit-convention).

5. Push your branch and open a Pull Request.

## Pull Request Process

1. **Title**: Use a clear, descriptive title following the commit convention.
2. **Description**: Explain what changes you made and why.
3. **Screenshots**: Include screenshots for UI changes.
4. **Tests**: Ensure all existing tests pass.
5. **Review**: Wait for at least one maintainer review before merging.

## Coding Standards

- **TypeScript**: All code must be written in TypeScript with strict mode.
- **Components**: Follow the Shadcn/UI component patterns.
- **Styling**: Use Tailwind CSS utility classes. No inline styles.
- **Naming**: Use camelCase for variables/functions, PascalCase for components.
- **Files**: Use kebab-case for file names (e.g., `my-component.tsx`).
- **Imports**: Use `@/` path aliases for all imports.

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]
```

### Types

| Type       | Description                          |
| ---------- | ------------------------------------ |
| `feat`     | A new feature                        |
| `fix`      | A bug fix                            |
| `docs`     | Documentation changes                |
| `style`    | Code style changes (formatting)      |
| `refactor` | Code refactoring                     |
| `perf`     | Performance improvements             |
| `test`     | Adding or updating tests             |
| `chore`    | Build process or tooling changes     |

### Examples

```
feat(landing): add testimonials section
fix(auth): resolve OAuth callback error
docs(readme): update installation instructions
chore(deps): upgrade Next.js to v15
```

## 🙏 Thank You!

Every contribution, no matter how small, makes FounderOS better for everyone. We appreciate your time and effort!
