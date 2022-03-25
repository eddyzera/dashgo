import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '../../styles/theme'

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  return (
    <ChakraProvider  theme={customTheme}>
      { children }
    </ChakraProvider>
  )
}