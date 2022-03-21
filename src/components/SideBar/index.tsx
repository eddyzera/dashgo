import React from 'react'
import {
  Box,
  Stack,
} from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export const SideBar: React.FunctionComponent = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="geral">
          <NavLink icon={RiDashboardLine}>
            dashboard
          </NavLink>
          <NavLink icon={RiContactsLine}>
            usuários
          </NavLink>
        </NavSection>
        <NavSection title="automação">
          <NavLink icon={RiInputMethodLine}>
            formulários
          </NavLink>
          <NavLink icon={RiGitMergeLine}>
            automação
          </NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}