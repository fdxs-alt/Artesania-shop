import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
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
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Main>
  )
}
