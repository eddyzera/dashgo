import { Flex } from '@chakra-ui/react'
import { Logo } from './Header/Logo'
import { NotificationNav } from './Header/NotificationNav'
import { Profile } from './Header/Profile'
import { Search } from './Header/Search'

export const Header = () => {
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
      <Logo />
      <Search />
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  )
}