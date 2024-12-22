import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuth } from '@/modules/auth/composables/useAuth'

export const guestGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { isAuthenticated } = useAuth()
  
  if (isAuthenticated.value) {
    next({ name: 'Home' })
  } else {
    next()
  }
}