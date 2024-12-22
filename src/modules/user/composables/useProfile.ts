import { useQuery } from '@vue/apollo-composable'
import { GET_USER_PROFILE } from '../graphql/queries'
import type { UserProfile } from '../types'

export function useProfile(userId: string) {
  const { result, loading, error } = useQuery(GET_USER_PROFILE, {
    variables: {
      id: userId
    }
  })

  return {
    profile: result as UserProfile,
    loading,
    error
  }
}