import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData extends LoginCredentials {
  name: string
}

export function useAuth() {
  const router = useRouter()
  const authStore = useAuthStore()
  const isAuthenticated = ref(false)
  const user = ref(null)

  const login = async (credentials: LoginCredentials) => {
    try {
      await authStore.login(credentials)
      const redirect = router.currentRoute.value.query.redirect as string
      router.push(redirect || '/')
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  const register = async (data: RegisterData) => {
    try {
      await authStore.register(data)
      router.push('/')
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await authStore.logout()
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
      throw error
    }
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
    register
  }
}