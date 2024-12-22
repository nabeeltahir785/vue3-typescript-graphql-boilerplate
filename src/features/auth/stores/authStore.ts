import { defineStore } from 'pinia'
import { apolloClient } from '@/graphql/client'
import { LOGIN, REGISTER } from '../api/mutations'
import type { AuthResponse, LoginCredentials, RegisterData, User } from '../types'

interface AuthState {
  token: string | null
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
    user: null
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  
  actions: {
    async login(credentials: LoginCredentials) {
      const { data } = await apolloClient.mutate({
        mutation: LOGIN,
        variables: credentials
      })
      
      const { token, user } = data.login as AuthResponse
      this.token = token
      this.user = user
    },
    
    async register(data: RegisterData) {
      const { data: responseData } = await apolloClient.mutate({
        mutation: REGISTER,
        variables: data
      })
      
      const { token, user } = responseData.register as AuthResponse
      this.token = token
      this.user = user
    },
    
    logout() {
      this.token = null
      this.user = null
    }
  }
})