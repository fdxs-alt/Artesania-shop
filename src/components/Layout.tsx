import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'

const Main = styled.div``
export default function Layout({
  title,
  children,
}: {
  title: string
  children: ReactNode
}): JSX.Element {
  return (
    <Main>
      <Head>
        <title>{title}</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Main>
  )
}
