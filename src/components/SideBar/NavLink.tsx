import { Icon, Link, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import React from 'react'

interface ILinkProps extends ChakraLinkProps {
  icon: React.ElementType, 
  children: string 
}

export const NavLink: React.FunctionComponent<ILinkProps> = ({ 
  icon, 
  children,
  ...props
}) => {
  return (
    <Link
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
    </Link>
  )
}