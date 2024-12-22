import type { AuthState } from '../types/auth.types'

export const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false
}