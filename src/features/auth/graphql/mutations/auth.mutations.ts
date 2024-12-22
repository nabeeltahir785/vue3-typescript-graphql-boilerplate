import { gql } from '@apollo/client/core'
import { UserFragment } from '../fragments'

export const LOGIN = gql`
  ${UserFragment}
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        ...UserFields
      }
    }
  }
`

export const REGISTER = gql`
  ${UserFragment}
  mutation Register($email: String!, $password: String!, $name: String!) {
    register(email: $email, password: $password, name: $name) {
      token
      user {
        ...UserFields
      }
    }
  }
`