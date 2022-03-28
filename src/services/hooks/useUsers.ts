import { useQuery } from "react-query"
import { api } from "../api"

type UserData = {
  created_at: string
  email: string
  id: string
  name: string
}


type GetUsersResponse = {
  totalCount: number
  users: Array<UserData>
}

const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get<GetUsersResponse>('/users', {
    params : {
      page,
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  return { 
    users,
    totalCount
  }
}

export const useUsers = (page: number) => {
  return useQuery<GetUsersResponse>(['users', page], 
    () => getUsers(page), 
    {staleTime: 1000 * 60 * 10}
  )
}