import React from 'react'
import {
  Box,
  Text,
  Stack,
} from '@chakra-ui/react'

export const NavSection: React.FunctionComponent<{ title: string }> = ({ title, children }) => {
  return (
    <Box>
      <Text
        fontWeight="bold"
        color="gray.400"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}