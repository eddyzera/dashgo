import React from 'react'
import { Button } from '@chakra-ui/react'

export const PaginationItem: React.FunctionComponent<{ 
  isCurrent?: boolean,
  pageNumber: number
}> = ({ isCurrent = false, pageNumber }) => {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bg: 'pink.500',
        cursor: 'default'
      }}
    >
      {pageNumber}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {pageNumber}
    </Button>
  )
}