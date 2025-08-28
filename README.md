# Vite React TypeScript Starter Template

This is a lightweight, scalable starter template for building React applications with Vite and TypeScript. It provides a clean project structure, best practices for React development, and TypeScript type safety, following modern web development standards.

## Features

- **Vite**: Fast build tool for modern web projects.
- **React**: Component-based UI library.
- **TypeScript**: Type-safe development with strong typing.
- **React Router**: Declarative routing with lazy loading and suspense.
- **Protected Routes**: Authentication guard for securing routes.
- **Redux Toolkit**: Centralized state management with typed reducers and slices.
- **CSS Modules**: Scoped styles with modular CSS.
- **Web Accessibility**: Basic accessibility features (ARIA attributes).
- **Environment Variables**: Type-safe environment variable management.
- **Scalable File Structure**: Organized for small to large-scale projects.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kamalkdolikay/desktop-kd.git
   cd desktop-kd
   ```

2. **Switch to the Scaffold Branch**:
   ```bash
   git checkout scaffold-redux
   ```

3. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   Create `.env`, `.env.development`, and `.env.production` files in the root directory based on the `.env.example` (if provided) or add the following:
   ```env
   VITE_APP_NAME=my-app
   VITE_API_URL=https://api.example.com
   VITE_DEBUG=false
   ```
   Ensure environment variables are typed in `src/types/vite-env.d.ts`.

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the app.

6. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready files will be output to the `dist` directory.

7. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Project Structure

```plaintext
├── src/
│   ├── assets/                        # Static assets
│   ├── constants/                     # Constant values
│   ├── features/                      # Feature-based modules (e.g., home, portfolio)
│   │   ├── home/
│   │   │   ├── components/            # Feature-specific components
│   │   │   │   ├── home.component.tsx # Feature-specific render components
│   │   │   │   ├── home.html.tsx      # Feature-specific HTML
│   │   │   ├── services/              # Feature-specific services/logic
│   │   │   │   ├── home.service.tsx   # Service logic
│   │   │   ├── state/                 # Feature-specific state management
│   │   │   │   ├── home.slice.ts      # Redux slice for home
│   │   │   ├── styles/                # Feature-specific styles
│   │   │   │   ├── home.module.css    # Scoped styles
│   │   │   ├── routes.tsx             # Feature-specific routes
│   │   ├── not-found/                 # Not found module
│   │   ├── portfolio/
│   │   │   ├── components/            # Feature-specific components
│   │   │   │   ├── portfolio.component.tsx # Feature-specific render components
│   │   │   │   ├── portfolio.html.tsx # Feature-specific HTML
│   │   │   ├── state/                 # Feature-specific state management
│   │   │   │   ├── portfolio.slice.ts # Redux slice for portfolio
│   │   │   ├── styles/                # Feature-specific styles
│   │   │   │   ├── portfolio.module.css # Scoped styles
│   │   │   ├── routes.tsx             # Feature-specific routes
│   ├── guards/                        # Route protection components
│   │   ├── protected-route.tsx        # Authentication guard component
│   ├── store/                         # Global state management
│   │   ├── store.ts                   # Redux store configuration
│   ├── types/                         # Global type definitions
│   │   ├── env.d.ts                   # Type definitions for environment variables
│   │   ├── vite-env.d.ts              # Type definitions for Vite environment
│   ├── app-routes.tsx                 # Main application routing
│   ├── app.tsx                        # Application root component
│   ├── index.css                      # Global styles
│   ├── main.tsx                       # Application entry point
├── .env                               # Environment variables (base)
├── .env.development                   # Environment variables (development)
├── .env.production                    # Environment variables (production)
├── .gitignore                         # Git ignore rules
├── .prettierignore                    # Prettier ignore rules
├── .prettierrc                        # Prettier configuration
├── .eslint.config.js                  # ESLint configuration
├── index.html                         # HTML entry point
├── package-lock.json                  # Lock file for dependencies
├── package.json                       # Project dependencies and scripts
├── README.md                          # Project documentation
├── tsconfig.app.json                  # TypeScript configuration for app
├── tsconfig.json                      # TypeScript configuration
├── tsconfig.node.json                 # TypeScript configuration for Node
├── vite.config.ts                     # Vite configuration
```

## Usage

- **Routing**: The project uses `react-router-dom` for client-side routing. Routes are defined in `src/app-routes.tsx` and feature-specific routes in `src/features/*/routes.tsx`. Lazy loading is implemented with `React.lazy` and `Suspense` for performance.
- **Protected Routes**: The `ProtectedRoute` component in `src/guards/protected-route.tsx` secures routes, such as `/portfolio/*`, by checking authentication status and redirecting unauthenticated users to `/login`. Replace the mock `isAuthenticated` function with actual authentication logic.
- **State Management**: Redux Toolkit is used for state management. The store is configured in `src/store/store.ts`, with feature-specific slices in `src/features/*/state/*.slice.ts` (e.g., `home.slice.ts`, `portfolio.slice.ts`). Typed hooks (`useAppSelector`, `useAppDispatch`) are provided for type-safe state access and dispatch.
- **Components**: Feature-specific components are located in `src/features/*/components/`. Global components are in `src/components/`.
- **Styling**: CSS Modules are used for scoped styling (e.g., `home.module.css`, `portfolio.module.css`). Global styles are in `src/index.css`.
- **Services**: Business logic and API calls are encapsulated in service files (e.g., `home.service.tsx`) under `src/features/*/services/`.
- **Environment Variables**: Access environment variables via `import.meta.env`. Ensure they are typed in `src/types/vite-env.d.ts`.

### Example Usage

```tsx
// src/features/home/components/home.component.tsx
import HomeHtml from './home.html';
import { useAppSelector } from '../../../store/store';

const Home = () => {
  const greetingMessage = useAppSelector((state) => state.home.greetingMessage);
  return <HomeHtml greetingMessage={greetingMessage} />;
};

export default Home;
```

```tsx
// src/features/home/components/home.html.tsx
import styles from '../styles/home.module.css';

interface HomeHtmlProps {
  greetingMessage: string;
}

const HomeHtml: React.FC<HomeHtmlProps> = ({ greetingMessage }) => {
  return (
    <h1 className={styles.helloWorld} aria-label={greetingMessage}>
      {greetingMessage}
    </h1>
  );
};

export default HomeHtml;
```

```tsx
// src/features/portfolio/components/portfolio.component.tsx
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import PortfolioHtml from './portfolio.html';
import { setGreetingMessage } from '../state/portfolio.slice';

const Portfolio: React.FC = () => {
  const dispatch = useAppDispatch();
  const greetingMessage = useAppSelector((state) => state.portfolio.greetingMessage);

  useEffect(() => {
    dispatch(setGreetingMessage('Welcome to My Portfolio!'));
  }, [dispatch]);

  return <PortfolioHtml message={greetingMessage} />;
};

export default Portfolio;
```

```tsx
// src/features/portfolio/components/portfolio.html.tsx
import styles from '../styles/portfolio.module.css';

interface PortfolioHtmlProps {
  message: string;
}

const PortfolioHtml: React.FC<PortfolioHtmlProps> = ({ message }) => {
  return (
    <h1 className={styles.portfolioTitle} aria-label={message}>
      {message}
    </h1>
  );
};

export default PortfolioHtml;
```

## Conventions and Formatting

The project adheres to the following naming and formatting conventions to ensure consistency and scalability:

- **File Names**: Use `kebab-case` (e.g., `home.component.tsx`, `protected-route.tsx`).
- **React Components**: Use `PascalCase` (e.g., `HomeHtml`, `Portfolio`, `ProtectedRoute`).
- **Functions, Hooks, and Variables**: Use `camelCase` (e.g., `handleClick`, `useAppSelector`, `greetingMessage`).
- **Constants and Environment Keys**: Use `UPPER_SNAKE_CASE` (e.g., `API_URL`, `VITE_APP_NAME`).
- **CSS Classes**: Use `camelCase` in CSS Modules (e.g., `.helloWorld`, `.portfolioTitle`).
- **TypeScript**: Ensure all variables, props, and state are type-safe. Use interfaces for structured data (e.g., `HomeState`, `PortfolioState`).
- **Accessibility**: Include ARIA attributes where applicable (e.g., `aria-label`, `role`) to support web accessibility.

## Git Workflow

The project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages to ensure clear and consistent version history.

### Commit Message Format

```plaintext
<type>(<scope>): <description>

[optional body]

[optional footer]
```

- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- **Scope**: Feature or module name (e.g., `home`, `portfolio`, `routing`, `guards`, `store`).
- **Examples**:
  ```bash
  git commit -m "feat(store): add redux store configuration"
  git commit -m "feat(home): implement home slice with redux"
  git commit -m "docs: update README with redux implementation"
  ```

### Git Flow for the Scaffold Branch

1. **Ensure You're on the Scaffold Branch**:
   ```bash
   git checkout scaffold-redux
   ```

2. **Add the README File**:
   Save the `README.md` file in the root directory.

3. **Commit Changes**:
   ```bash
   git add README.md
   git commit -m "docs: update README with redux implementation and scaffold-redux branch"
   ```

4. **Push to the Branch**:
   ```bash
   git push origin scaffold-redux
   ```

5. **Create a Pull Request**:
   Open a pull request from `scaffold-redux` to `main` on GitHub with a clear description of changes.

## Best Practices

- **SOLID Principles**: Follow single responsibility, open-closed, and dependency inversion principles for maintainable code.
- **Loose Coupling**: Avoid tight coupling between components and services. Use dependency injection where applicable.
- **Avoid Magic Strings/Numbers**: Use constants for values like API endpoints or configuration (e.g., `VITE_APP_NAME`).
- **Scalability**: Organize code into feature modules, guards, and a global store to support growth and maintainability.
- **Type Safety**: Declare types for all variables, props, and state to prevent runtime errors (e.g., `RootState`, `AppDispatch`).
- **Accessibility**: Use semantic HTML and ARIA attributes to ensure the app is accessible to all users.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run format`: Run Prettier to format code.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature` from `scaffold-redux` or `main`).
3. Commit changes using conventional commits.
4. Push to the branch (`git push origin feat/your-feature`).
5. Open a pull request with a detailed description.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.