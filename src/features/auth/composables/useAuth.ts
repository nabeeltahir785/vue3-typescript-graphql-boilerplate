import { storeToRefs } from 'pinia'
import { useAuthStore } from '../store'
import type { LoginCredentials, RegisterData } from '../types/auth.types'
import { useRouter } from 'vue-router'

export function useAuth() {
  const store = useAuthStore()
  const router = useRouter()
  const { user, isAuthenticated } = storeToRefs(store)

  const login = async (credentials: LoginCredentials) => {
    try {
      await store.login(credentials)
      const redirect = router.currentRoute.value.query.redirect as string
      router.push(redirect || '/')
    } catch (error) {
      throw new Error('Login failed')
    }
  }

  const register = async (data: RegisterData) => {
    try {
      await store.register(data)
      router.push('/')
    } catch (error) {
      throw new Error('Registration failed')
    }
  }

  const logout = () => {
    store.logout()
    router.push('/login')
  }

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout
  }
}