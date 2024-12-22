import { defineStore } from 'pinia'
import type { LoginCredentials, RegisterData } from '../composables/useAuth'

interface AuthState {
  token: string | null
  user: any | null
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
      // Implement login logic with GraphQL mutation
      // For now, we'll just set a dummy token
      this.token = 'dummy-token'
      this.user = { email: credentials.email }
    },
    
    async register(data: RegisterData) {
      // Implement register logic with GraphQL mutation
      this.token = 'dummy-token'
      this.user = { email: data.email, name: data.name }
    },
    
    async logout() {
      this.token = null
      this.user = null
    }
  }
})