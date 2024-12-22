import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useAuthStore } from '../../store'
import { apolloClient } from '@/graphql/client'
import { vi } from 'vitest'

vi.mock('@/graphql/client', () => ({
  apolloClient: {
    mutate: vi.fn()
  }
}))

describe('AuthStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initialize with correct default state', () => {
    const store = useAuthStore()
    expect(store.user).toBeNull()
    expect(store.token).toBeNull()
    expect(store.isAuthenticated).toBe(false)
  })

  it('should handle successful login', async () => {
    const store = useAuthStore()
    const mockResponse = {
      data: {
        login: {
          token: 'test-token',
          user: {
            id: '1',
            email: 'test@example.com',
            name: 'Test User'
          }
        }
      }
    }

    vi.mocked(apolloClient.mutate).mockResolvedValueOnce(mockResponse)

    await store.login({
      email: 'test@example.com',
      password: 'password'
    })

    expect(store.token).toBe('test-token')
    expect(store.user).toEqual(mockResponse.data.login.user)
    expect(store.isAuthenticated).toBe(true)
  })

  it('should handle login failure', async () => {
    const store = useAuthStore()
    
    vi.mocked(apolloClient.mutate).mockRejectedValueOnce(new Error('Login failed'))

    await expect(store.login({
      email: 'test@example.com',
      password: 'password'
    })).rejects.toThrow('Login failed')
  })

  it('should handle successful registration', async () => {
    const store = useAuthStore()
    const mockResponse = {
      data: {
        register: {
          token: 'test-token',
          user: {
            id: '1',
            email: 'test@example.com',
            name: 'Test User'
          }
        }
      }
    }

    vi.mocked(apolloClient.mutate).mockResolvedValueOnce(mockResponse)

    await store.register({
      email: 'test@example.com',
      password: 'password',
      name: 'Test User'
    })

    expect(store.token).toBe('test-token')
    expect(store.user).toEqual(mockResponse.data.register.user)
    expect(store.isAuthenticated).toBe(true)
  })

  it('should handle registration failure', async () => {
    const store = useAuthStore()
    
    vi.mocked(apolloClient.mutate).mockRejectedValueOnce(new Error('Registration failed'))

    await expect(store.register({
      email: 'test@example.com',
      password: 'password',
      name: 'Test User'
    })).rejects.toThrow('Registration failed')
  })

  it('should handle logout', () => {
    const store = useAuthStore()
    store.setAuthData({
      token: 'test-token',
      user: {
        id: '1',
        email: 'test@example.com',
        name: 'Test User'
      }
    })

    store.logout()

    expect(store.token).toBeNull()
    expect(store.user).toBeNull()
    expect(store.isAuthenticated).toBe(false)
  })
})