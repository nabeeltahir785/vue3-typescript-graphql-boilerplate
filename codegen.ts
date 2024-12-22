import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_URL || 'http://localhost:4000/graphql',
  documents: ['src/**/*.vue', 'src/**/*.ts'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations'],
      config: {
        withHooks: true,
      },
    },
  },
}

export default config