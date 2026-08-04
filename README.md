# Micro Frontends

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Module Federation](https://img.shields.io/badge/Module-Federation-FF6B35?style=for-the-badge)
![pnpm](https://img.shields.io/badge/pnpm-workspaces-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern Micro Frontend architecture built with **React**, **TypeScript**, **Vite**, **Module Federation**, and **pnpm Workspaces**. This project demonstrates how independently developed frontend applications can be composed into a single, scalable web application.

---

## 📖 Overview

This repository demonstrates the **Micro Frontends** architectural pattern using a modern frontend technology stack.

Instead of building a single monolithic frontend, the application is divided into multiple independent applications (**Remotes**) that are dynamically loaded by a central **Host** application using **Module Federation**.

This architecture enables independent development, deployment, and scaling while maintaining a consistent user experience.

---

## 🏗️ Architecture

```text
micro-frontends/
│
├── apps/
│   ├── host/              # Main application
│   ├── remote-1/          # Remote application
│   ├── remote-2/          # Remote application
│   └── ...
│
├── packages/
│   ├── shared-ui/         # Shared React components
│   ├── config/            # Shared configuration
│   └── utils/             # Shared utilities
│
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

### Host

The Host application is responsible for:

- Application routing
- Loading remote applications
- Global layout
- Navigation
- Shared dependencies

### Remotes

Each Remote application:

- Can be developed independently
- Can be deployed independently
- Exposes selected React components
- Represents a separate business domain

### Shared Packages

Reusable code shared across every application:

- UI components
- Utilities
- Configuration
- Shared types

---

## 🚀 Technologies

| Technology | Purpose |
|------------|---------|
| React | User Interface |
| TypeScript | Static typing |
| Vite | Build tool |
| Module Federation | Dynamic module loading |
| pnpm Workspaces | Monorepo management |
| ESLint | Code quality |
| Prettier | Code formatting |

---

## ✨ Features

- ✅ Micro Frontend architecture
- ✅ Module Federation
- ✅ Monorepo structure
- ✅ Independent applications
- ✅ Shared component library
- ✅ Shared dependencies
- ✅ Fast development with Vite
- ✅ Hot Module Replacement (HMR)
- ✅ Scalable architecture
- ✅ TypeScript support

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Squezer123/Micro-frontends.git
```

Move into the project directory:

```bash
cd Micro-frontends
```

Install all dependencies:

```bash
pnpm install
```

---

## ▶️ Running the project

Run every application:

```bash
pnpm dev
```

Run only the Host:

```bash
pnpm --filter host dev
```

Run a specific Remote:

```bash
pnpm --filter remote-1 dev
```

---

## 📁 Project Structure

| Folder | Description |
|---------|-------------|
| `apps/` | Host and Remote applications |
| `packages/` | Shared libraries |
| `public/` | Static assets |
| `package.json` | Project configuration |
| `pnpm-workspace.yaml` | Workspace configuration |

---

## 🔄 Development Workflow

1. Create or update a Remote application.
2. Expose components using Module Federation.
3. Register the Remote inside the Host.
4. Start the development server.
5. Changes are reflected instantly with Hot Module Replacement.

---

## 🧩 System Overview

```text
                    +----------------------+
                    |        HOST          |
                    |  Routing & Layout    |
                    +----------+-----------+
                               |
          +--------------------+--------------------+
          |                                         |
+---------+----------+                 +------------+---------+
|      REMOTE 1      |                 |      REMOTE 2        |
| Independent Module |                 | Independent Module   |
+--------------------+                 +----------------------+
          |                                         |
          +--------------------+--------------------+
                               |
                  Shared UI • Utils • Config
```

---

## 📈 Advantages

- Independent deployments
- Independent development teams
- Better scalability
- Improved maintainability
- Reusable shared libraries
- Faster development
- Easier application growth
- Better separation of concerns

---

## 🧪 Available Scripts

| Command | Description |
|----------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start development mode |
| `pnpm build` | Build all applications |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format source code |

---

## 🎯 Learning Objectives

This project demonstrates practical implementation of:

- Micro Frontend architecture
- Module Federation
- React application composition
- Monorepo architecture
- Shared component libraries
- Independent deployment strategies
- Modern frontend development practices

---

## 🚀 Future Improvements

- Authentication
- Shared state management
- CI/CD pipeline
- Storybook
- Unit testing
- End-to-end testing
- Monitoring
- Logging

---

## 🤝 Contributing

Contributions are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Krzysztof Kordiukiewicz**

GitHub: https://github.com/Squezer123
