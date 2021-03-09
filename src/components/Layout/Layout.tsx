import { ReactNode } from 'react'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import styled from 'styled-components'
import Seo from './Seo'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export default function Layout({
  title,
  children,
  url,
}: {
  title: string
  children: ReactNode
  url: string
}): JSX.Element {
  return (
    <Main>
      <Seo title={title} url={url} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Main>
  )
}
