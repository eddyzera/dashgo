import { Stack, Button, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  /**
   * Numero total de Registros
   */
  totalCountOfRegisters: number

  /**
   * Quantos Registros por paginas
   */
  registersPerPage?: number

  /**
   * Pagina atual
   */
  currentPage?: number

  /**
   * Função para executar algum processo quando a pagina mudar
   */
  onPageChange?: (page: number) => void
}

const siblingsCount = 1

// from 5 / to 6
const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)].map((_, index) => {
    return from + index + 1
  })
  .filter(page => page > 0)
}

export const Pagination: React.FunctionComponent<PaginationProps> = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}) => {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)
  
  const previousPages = currentPage > 1 ? 
  generatePagesArray(
    currentPage - 1 - siblingsCount,
    currentPage - 1
  ) 
  : 
  []
  
  const nextPages = currentPage < lastPage ? 
  generatePagesArray(
    currentPage,
    Math.min(currentPage + siblingsCount, lastPage)
  ) 
  : 
  []

  return (
    <Stack
      direction={["column", "row"]}
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
        {currentPage > ( 1 + siblingsCount ) && (
          <>
            <PaginationItem pageNumber={1} />
            { currentPage > ( 2 + siblingsCount ) && (
              <Text color="gray.300" w="8" textAlign="center">...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem key={page} pageNumber={page} />
        })}

        <PaginationItem pageNumber={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem key={page} pageNumber={page} />
        })}

        {(currentPage + siblingsCount) < lastPage  && (
          <>
            { (currentPage + 1 + siblingsCount ) < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">...</Text>
            )}
            <PaginationItem pageNumber={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}