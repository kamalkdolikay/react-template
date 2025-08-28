# Vite React TypeScript Starter Template

This is a lightweight, scalable starter template for building React applications with Vite and TypeScript. It provides a clean project structure, best practices for React development, and TypeScript type safety, following modern web development standards.

## Features

- **Vite**: Fast build tool for modern web projects.
- **React**: Component-based UI library.
- **TypeScript**: Type-safe development with strong typing.
- **React Router**: Declarative routing with lazy loading and suspense.
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
   git clone https://github.com/kamalkdolikay/react-template.git
   cd react-template
   ```

2. **Switch to the Scaffold Branch**:
   ```bash
   git checkout scaffold-basic
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
│   ├── components/                    # Reusable UI components
│   ├── features/                      # Feature-based modules (e.g., home, portfolio)
│   │   ├── home/
│   │   │   ├── components/            # Feature-specific components
│   │   │   │   ├── home.component.tsx # Feature-specific render components
│   │   │   │   ├── home.html.tsx      # Feature-specific HTML
│   │   │   │   ├── home.module.css    # Feature-specific styles
│   │   │   ├── services/
│   │   │   │   ├── home.service.tsx   # Feature-specific services/logic
│   │   │   ├── routes.tsx             # Feature-specific routes
│   ├── types/                         # Global type definitions
│   │   ├── env.d.ts                   # Type definitions for environment variables
│   │   ├── vite-env.d.ts              # Enable vite imports
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
├── .eslint.config.js                  # ESLint JS configuration
├── .eslint.config.ts                  # ESLint TS configuration
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
- **Components**: Feature-specific components are located in `src/features/*/components/`. Global components are in `src/components/`.
- **Styling**: CSS Modules are used for scoped styling (e.g., `home.module.css`). Global styles are in `src/index.css`.
- **Services**: Business logic and API calls are encapsulated in service files (e.g., `home.service.tsx`) under `src/features/*/services/`.
- **Environment Variables**: Access environment variables via `import.meta.env`. Ensure they are typed in `src/types/vite-env.d.ts`.

## Conventions and Formatting

The project adheres to the following naming and formatting conventions to ensure consistency and scalability:

- **File Names**: Use `kebab-case` (e.g., `home.component.tsx`, `app-routes.tsx`).
- **React Components**: Use `PascalCase` (e.g., `HomeHtml`, `NotFound`).
- **Functions, Hooks, and Variables**: Use `camelCase` (e.g., `handleClick`, `useAuth`, `greetingMessage`).
- **Constants and Environment Keys**: Use `UPPER_SNAKE_CASE` (e.g., `API_URL`, `VITE_APP_NAME`).
- **CSS Classes**: Use `camelCase` in CSS Modules (e.g., `.helloWorld`).
- **TypeScript**: Ensure all variables, props, and state are type-safe. Use interfaces for structured data (e.g., `Home` interface in `home.service.tsx`).
- **Accessibility**: Include ARIA attributes where applicable (e.g., `aria-label`, `role`) to support web accessibility.

### Example Usage

```tsx
// src/features/home/components/home.component.tsx
import HomeHtml from './home.html';

const Home = () => {
  return <HomeHtml />;
};

export default Home;
```

```tsx
// src/features/home/components/home.html.tsx
import styles from './home.module.css';

const HomeHtml: React.FC = () => {
  const greetingMessage: string = 'Hello, World!';
  return (
    <h1 className={styles.helloWorld} aria-label={greetingMessage}>
      {greetingMessage}
    </h1>
  );
};

export default HomeHtml;
```

## Git Workflow

The project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages to ensure clear and consistent version history.

### Commit Message Format

```plaintext
<type>(<scope>): <description>

[optional body]

[optional footer]
```

- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- **Scope**: Feature or module name (e.g., `home`, `portfolio`, `routing`).
- **Examples**:
  ```bash
  git commit -m "feat(home): add home page component"
  git commit -m "fix(routing): resolve redirect issue in app-routes"
  git commit -m "docs: update README with conventions"
  ```

### Git Flow for the Scaffold Branch

1. **Ensure You're on the Scaffold Branch**:
   ```bash
   git checkout scaffold-basic
   ```

2. **Add the README File**:
   Save the `README.md` file in the root directory.

3. **Commit Changes**:
   ```bash
   git add README.md
   git commit -m "docs: update README with project structure"
   ```

4. **Push to the Branch**:
   ```bash
   git push origin scaffold-basic
   ```

5. **Create a Pull Request**:
   Open a pull request from `scaffold-basic` to `main` on GitHub with a clear description of changes.

## Best Practices

- **SOLID Principles**: Follow single responsibility, open-closed, and dependency inversion principles for maintainable code.
- **Loose Coupling**: Avoid tight coupling between components and services. Use dependency injection where applicable.
- **Avoid Magic Strings/Numbers**: Use constants for values like API endpoints or configuration (e.g., `VITE_APP_NAME`).
- **Scalability**: Organize code into feature modules to support growth and maintainability.
- **Type Safety**: Declare types for all variables, props, and state to prevent runtime errors.
- **Accessibility**: Use semantic HTML and ARIA attributes to ensure the app is accessible to all users.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run format`: Run Prettier to format code.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature` from `scaffold-basic` or `main`).
3. Commit changes using conventional commits.
4. Push to the branch (`git push origin feat/your-feature`).
5. Open a pull request with a detailed description.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.