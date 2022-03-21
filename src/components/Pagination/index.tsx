import { Stack, Button, Box } from '@chakra-ui/react'
import React from 'react'
import { PaginationItem } from './PaginationItem'

export const Pagination: React.FunctionComponent = () => {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack 
        direction="row"
        spacing="2"
      >
        <PaginationItem pageNumber={1} isCurrent />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
      </Stack>
    </Stack>
  )
}