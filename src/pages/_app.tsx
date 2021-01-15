import { ChakraProvider } from '@chakra-ui/react'
import CommerceContextProvider from '../store/CommerceProvider'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CommerceContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </CommerceContextProvider>
  )
}

export default MyApp
