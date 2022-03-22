import React from 'react'
import { Stack } from '@chakra-ui/react'
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export const SideBarNav: React.FunctionComponent = () => {
  return (
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
  )
}