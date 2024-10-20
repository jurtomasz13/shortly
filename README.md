# Nx React Nest Template

This repository provides a robust template for building applications using **Nx**, **React**, and **NestJS**. It includes pre-configured tools for linting, formatting, and managing your monorepo efficiently. The template is designed for rapid development and includes essential setup for modern web applications.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Custom Targets](#custom-targets)
  - [Format Target](#format-target)
- [Scripts](#scripts)
- [Linting and Formatting](#linting-and-formatting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Nx Monorepo**: Leverage the power of Nx to manage multiple projects within a single repository.
- **React Application**: Easily create scalable React applications with best practices.
- **NestJS Backend**: Build efficient and scalable server-side applications using NestJS.
- **Husky and lint-staged**: Automatically format code and enforce linting rules before committing changes.
- **Custom Nx Targets**: Define custom targets for easy management of scripts and commands.

## Getting Started

To get started with this template, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/nx-react-nest-template.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd nx-react-nest-template
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:

   For the React application:
   ```bash
   nx serve react
   ```

   For the NestJS application:
   ```bash
   nx serve backend
   ```

## Folder Structure

The repository follows a structured folder layout:

```
nx-react-nest-template/
├── apps/
│   ├── frontend/
│   ├── backend/
│   └── backend-e2e/
├── libs/
│   └── shared/
├── .husky/
├── .prettierrc
├── nx.json
├── package.json
└── workspace.json
```

- `apps/`: Contains the individual applications (React and Nest).
- `libs/`: Holds shared libraries that can be used across multiple apps.
- `.husky/`: Configuration for Husky Git hooks.
- `.prettierrc`: Prettier configuration for code formatting.
- `nx.json`: Nx workspace configuration.
- `package.json`: Project dependencies and scripts.
- `workspace.json`: Configuration for all projects and libraries in the workspace.

## Custom Targets

Nx allows you to define custom targets that streamline your development workflow. In this template, a custom target named `format` has been added.

### Format Target

The `format` target is used to run Prettier and format your codebase automatically. You can execute this target to ensure your code adheres to your defined style guidelines.

To run the format target, use the following command:

```bash
nx run <project-name>:format
```

Replace `<project-name>` with the name of the project you want to format (e.g., `frontend` or `backend`).

**Example Usage:**

To format the React application, run:
```bash
nx run frontend:format
```

To format the NestJS application, run:
```bash
nx run backend:format
```

To format both applications, run:
```bash
npm run format
```

## Scripts

This template includes various npm scripts to aid development:

- `npm run format`: Formats the entire codebase using Prettier.
- `npm run lint`: Lints the entire codebase using ESLint.
- `npm run test`: Runs tests for all applications.
- `npm run build`: Builds all applications.

## Linting and Formatting

This repository integrates ESLint and Prettier for maintaining code quality and consistent formatting across the project.

- **Husky**: Automatically runs linting and formatting checks before commits.
- **lint-staged**: Ensures that only staged files are checked and formatted during a commit.

**Configuration:**
Prettier configuration can be found in the root `.prettierrc` file, while individual project configurations can be defined within their respective directories.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.