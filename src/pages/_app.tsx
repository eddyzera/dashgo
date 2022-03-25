import { AppProps } from 'next/app'
import { SideBarDrawerProvider } from '../provider/context/SideBarContext'
import { makeServer } from '../services/mirage'
import { ProviderQuery } from '../provider/query/ProviderQuery'
import { ThemeProvider } from '../provider/theme/ThemeProvider'

if(process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SideBarDrawerProvider>
        <ProviderQuery>
          <Component {...pageProps} />
        </ProviderQuery>
      </SideBarDrawerProvider>
    </ThemeProvider>
  )
}

export default MyApp
