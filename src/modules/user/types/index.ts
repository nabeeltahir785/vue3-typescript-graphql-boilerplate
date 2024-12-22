export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

export interface UserProfile extends User {
  bio?: string
  avatar?: string
}