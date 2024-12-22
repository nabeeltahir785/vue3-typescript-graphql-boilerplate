import { gql } from '@apollo/client/core'

export const GET_USER_PROFILE = gql`
  query GetUserProfile($id: ID!) {
    user(id: $id) {
      id
      name
      email
      bio
      avatar
      createdAt
    }
  }
`