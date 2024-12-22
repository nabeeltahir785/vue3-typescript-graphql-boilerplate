# Vue 3 + TypeScript + GraphQL Boilerplate

This is a modern Vue 3 boilerplate with TypeScript, GraphQL, and comprehensive testing setup. The project follows a feature-based architecture for better scalability and maintainability.

## 🚀 Features

- Vue 3 with Composition API
- TypeScript for type safety
- GraphQL with Apollo Client
- Vee-Validate for form validations
- Pinia for state management
- Vitest for unit testing
- Cypress for E2E testing
- Feature-based architecture
- Comprehensive ESLint and Prettier setup

## 📁 Project Structure

```
src/
├── assets/                 # Static assets
│   ├── images/
│   ├── fonts/
│   └── styles/            # Global styles
│
├── components/            # Shared components
│   ├── base/             # Base/UI components
│   └── ui/               # Complex UI components
│
├── core/                 # Core application setup
│   ├── plugins/         # Vue plugins configuration
│   └── directives/      # Custom Vue directives
│
├── features/            # Feature-based modules
│   ├── auth/           # Authentication feature
│   │   ├── components/
│   │   ├── composables/
│   │   ├── graphql/
│   │   ├── store/
│   │   └── types/
│   └── user/           # User feature
│
├── graphql/            # GraphQL setup
│   ├── client/
│   ├── queries/
│   └── mutations/
│
├── router/             # Vue Router setup
│   ├── guards/
│   └── middleware/
│
├── shared/            # Shared utilities
│   ├── composables/
│   ├── constants/
│   └── utils/
│
├── stores/            # Pinia stores
├── types/             # TypeScript types
└── views/             # Route components
```

## 🛠️ Environment Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run E2E tests
- `npm run lint` - Lint code
- `npm run format` - Format code
- `npm run codegen` - Generate GraphQL types

## 🏗️ Architecture Decisions

### Feature-based Structure
- Each feature is self-contained with its own components, store, and types
- Promotes better code organization and maintainability
- Makes it easier to add new features without affecting others

### GraphQL Implementation
- Uses Apollo Client for GraphQL operations
- Implements automatic type generation
- Separates queries and mutations by feature

### State Management
- Uses Pinia for global state management
- Each feature has its own store
- Implements proper TypeScript types for stores

### Testing Strategy
- Unit tests with Vitest
- E2E tests with Cypress
- Component testing with @testing-library/vue
- MSW for API mocking

### Form Validation
- Uses Vee-Validate with Yup schemas
- Implements reusable validation rules
- Type-safe form handling

## 📚 Coding Guidelines

1. **Component Structure**
    - Use composition API with `<script setup>`
    - Keep components focused and small
    - Implement proper prop validation

2. **TypeScript Usage**
    - Strict type checking enabled
    - No `any` types unless absolutely necessary
    - Use interfaces for object shapes

3. **Testing Requirements**
    - Unit tests for utilities and stores
    - Component tests for complex components
    - E2E tests for critical user flows

## 🔧 Configuration Files

- `.eslintrc.js` - ESLint configuration
- `tsconfig.json` - TypeScript configuration
- `vitest.config.ts` - Vitest configuration
- `codegen.yml` - GraphQL codegen configuration

## 📦 Empty Directories

To preserve the project structure, empty directories include a `.gitkeep` file. Key directories to keep:

```bash
mkdir -p src/{assets,components,core,features,graphql,router,shared,stores,types,views}
touch src/{assets,components,core,features,graphql,router,shared,stores,types,views}/.gitkeep
```

## 📐 Code Style

This project uses ESLint and Prettier for code formatting. Configuration files are included in the repository.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

