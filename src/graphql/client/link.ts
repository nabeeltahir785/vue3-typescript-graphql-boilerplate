import { createHttpLink } from '@apollo/client/core'
import { authLink } from './middleware/auth'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL
})

export const link = authLink.concat(httpLink)