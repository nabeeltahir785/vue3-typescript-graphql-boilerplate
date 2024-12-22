import { defineStore } from 'pinia'
import { apolloClient } from '@/graphql/client'
import { LOGIN, REGISTER } from '../graphql'
import type { AuthState, LoginCredentials, RegisterData } from '../types/auth.types'
import { initialState } from './auth.state'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({ ...initialState }),

  getters: {
    currentUser: (state) => state.user,
    authToken: (state) => state.token
  },

  actions: {
    async login(credentials: LoginCredentials) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: LOGIN,
          variables: credentials
        })
        
        this.setAuthData(data.login)
      } catch (error) {
        throw new Error('Login failed')
      }
    },

    async register(data: RegisterData) {
      try {
        const { data: result } = await apolloClient.mutate({
          mutation: REGISTER,
          variables: data
        })
        
        this.setAuthData(result.register)
      } catch (error) {
        throw new Error('Registration failed')
      }
    },

    setAuthData({ user, token }) {
      this.user = user
      this.token = token
      this.isAuthenticated = true
    },

    logout() {
      Object.assign(this, initialState)
    }
  }
})