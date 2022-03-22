import React from 'react'
import Link from 'next/link'
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

interface ILinkProps extends ChakraLinkProps {
  icon: React.ElementType, 
  children: string
  href: string
}

export const NavLink: React.FunctionComponent<ILinkProps> = ({ 
  icon, 
  children,
  href,
  ...props
}) => {
  return (
    <Link href={href} passHref>
      <ChakraLink
        display="flex"
        alignItems="center"
        {...props}
      >
        <Icon as={icon} fontSize="20" />
        <Text
          ml="4"
          fontWeight="medium"
          textTransform="capitalize"
        >
          {children}
        </Text>
      </ChakraLink>
    </Link>
  )
}