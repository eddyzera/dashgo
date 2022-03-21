import React from 'react'
import {
  Flex,
  Box,
  Text,
  Avatar
} from '@chakra-ui/react'

export const Profile: React.FunctionComponent<{ 
  showProfileData?: boolean 
}> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Edgar Silva</Text>
          <Text color="gray.300" fontSize="small">
            esilva644@gmail.com
          </Text>
        </Box>
      ) }
      <Avatar
        size="md"
        name="Edgar Silva"
        src="https://avatars.githubusercontent.com/u/60861927?v=4"
      />
    </Flex>
  )
}