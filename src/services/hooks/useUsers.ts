import { useQuery } from "react-query"
import { api } from "../api"

type UserData = {
  created_at: string
  email: string
  id: string
  name: string
}

const getUsers = async (): Promise<Array<UserData>> => {
  const { data } = await api.get('/users')
  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  return users
}

export const useUsers = () => {
  return useQuery<Array<UserData>>('users', getUsers, {staleTime: 1000 * 5})
}