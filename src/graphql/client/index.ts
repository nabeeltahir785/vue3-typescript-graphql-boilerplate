import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { link } from './link'
import { cache } from './cache'
import { typePolicies } from './policies'

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies
  })
})