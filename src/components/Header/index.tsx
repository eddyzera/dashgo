import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSideBarContext } from '../../provider/context/SideBarContext'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { Search } from './Search'

export const Header = () => {
  const { onOpen } = useSideBarContext()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      align="center"
      px="center"
    >
      {!isWideVersion && (
        <IconButton 
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />} 
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />
      { isWideVersion && <Search /> }
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}