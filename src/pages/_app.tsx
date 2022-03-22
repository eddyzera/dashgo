import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '../styles/theme'
import { SideBarDrawerProvider } from '../provider/context/SideBarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <SideBarDrawerProvider>
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
