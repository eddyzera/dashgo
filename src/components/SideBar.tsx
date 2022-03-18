import React from 'react'
import {
  Box,
  Stack,
  Text,
  Link,
  Icon
} from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

export const SideBar: React.FunctionComponent = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text
            fontWeight="bold"
            color="gray.400"
            textTransform="uppercase"
          >
            geral
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link
              display="flex"
              alignItems="center"
            >
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text
                ml="4"
                fontWeight="medium"
                textTransform="capitalize"
              >
                dashboard
              </Text>
            </Link>
            <Link
              display="flex"
              alignItems="center"
            >
              <Icon as={RiContactsLine} fontSize="20" />
              <Text
                ml="4"
                fontWeight="medium"
                textTransform="capitalize"
              >
                usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text
            fontWeight="bold"
            color="gray.400"
            textTransform="uppercase"
          >
            automação
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link
              display="flex"
              alignItems="center"
            >
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text
                ml="4"
                fontWeight="medium"
                textTransform="capitalize"
              >
                formulários
              </Text>
            </Link>
            <Link
              display="flex"
              alignItems="center"
            >
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text
                ml="4"
                fontWeight="medium"
                textTransform="capitalize"
              >
                automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}