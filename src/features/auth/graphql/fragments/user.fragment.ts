import { gql } from '@apollo/client/core'

export const UserFragment = gql`
  fragment UserFields on User {
    id
    email
    name
  }
`