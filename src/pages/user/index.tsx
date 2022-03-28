import React, { useState } from 'react'
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
import { RiAddLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { SideBar } from '../../components/SideBar'
import { useUsers } from '../../services/hooks/useUsers'

export default function UserList() {
  const [page, setPage] = useState<number>(1)
  const { data, isLoading, isFetching, error } = useUsers(page)
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
            <Heading size="lg" fontWeight="normal">
              Usuários
              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" /> }
            </Heading>
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
                  { data?.users.map((user) => {
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
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          ) }
        </Box>
      </Flex>
    </Box>
  )
}