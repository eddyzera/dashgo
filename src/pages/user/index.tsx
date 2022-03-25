import Link from 'next/link'
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
  Spinner
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { RiAddLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { SideBar } from '../../components/SideBar'

type UserData = {
  created_at: string
  email: string
  id: string
  name: string
}

export default function UserList() {
  const { data, isLoading, error } = useQuery<Array<UserData>>('users', 
    async () => {
      const response = await fetch('http://localhost:3000/api/users')
      const data = await response.json()
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
  )
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link passHref href="/user/create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                textTransform="capitalize"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                criar novo usuário
              </Button>
            </Link>
          </Flex>
          { isLoading ? (
            <Flex justify="center" alignItems="center" h="50%">
              <Spinner />
            </Flex>
          ) : error ? (
              <Flex justify="center" alignItems="center" h="50%">
                <Text>Falha ao obter dados dos usuários</Text>
              </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    { isWideVersion && (
                      <Th>Usuário</Th>
                    ) }
                    <Th>Data de cadastro</Th>
                    <Th w="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  { data.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && ( <Td>{user.created_at}</Td> )}
                      </Tr>
                    )
                  }) }
                </Tbody>
                </Table>
              <Pagination />
            </>
          ) }
        </Box>
      </Flex>
    </Box>
  )
}