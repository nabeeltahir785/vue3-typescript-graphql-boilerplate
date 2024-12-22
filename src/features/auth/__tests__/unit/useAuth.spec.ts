import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useAuth } from '../../composables/useAuth'
import { useAuthStore } from '../../store'
import { createPinia, setActivePinia } from 'pinia'
import { useRouter } from 'vue-router'

vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    currentRoute: {
      value: { query: {} }
    }
  }))
}))

describe('useAuth', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should login successfully', async () => {
    const { login } = useAuth()
    const store = useAuthStore()
    const router = useRouter()
    
    vi.spyOn(store, 'login').mockResolvedValueOnce()
    
    await login({ email: 'test@example.com', password: 'password' })
    
    expect(store.login).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password'
    })
    expect(router.push).toHaveBeenCalledWith('/')
  })

  it('should handle login failure', async () => {
    const { login } = useAuth()
    const store = useAuthStore()
    
    vi.spyOn(store, 'login').mockRejectedValueOnce(new Error('Login failed'))
    
    await expect(login({ 
      email: 'test@example.com', 
      password: 'password' 
    })).rejects.toThrow('Login failed')
  })

  it('should register successfully', async () => {
    const { register } = useAuth()
    const store = useAuthStore()
    const router = useRouter()
    
    vi.spyOn(store, 'register').mockResolvedValueOnce()
    
    await register({ 
      email: 'test@example.com', 
      password: 'password',
      name: 'Test User'
    })
    
    expect(store.register).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
      name: 'Test User'
    })
    expect(router.push).toHaveBeenCalledWith('/')
  })

  it('should handle registration failure', async () => {
    const { register } = useAuth()
    const store = useAuthStore()
    
    vi.spyOn(store, 'register').mockRejectedValueOnce(new Error('Registration failed'))
    
    await expect(register({
      email: 'test@example.com',
      password: 'password',
      name: 'Test User'
    })).rejects.toThrow('Registration failed')
  })

  it('should logout successfully', () => {
    const { logout } = useAuth()
    const store = useAuthStore()
    const router = useRouter()
    
    vi.spyOn(store, 'logout')
    
    logout()
    
    expect(store.logout).toHaveBeenCalled()
    expect(router.push).toHaveBeenCalledWith('/login')
  })
})