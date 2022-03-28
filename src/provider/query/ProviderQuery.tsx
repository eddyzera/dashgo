import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export const queryClient = new QueryClient()

export const ProviderQuery: React.FunctionComponent = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      { children }
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}