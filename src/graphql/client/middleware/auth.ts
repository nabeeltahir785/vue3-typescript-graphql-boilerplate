import { setContext } from '@apollo/client/link/context'
import { useAuthStore } from '@/stores/modules/auth'

export const authLink = setContext((_, { headers }) => {
  const store = useAuthStore()
  const token = store.authToken

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})