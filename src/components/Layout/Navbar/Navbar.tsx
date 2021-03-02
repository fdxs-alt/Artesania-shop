import React from 'react'
import NextLink from 'next/link'
import { useScrollHeight } from '@shared'
import { Header, Nav, LinkGroup, Logo, Link } from './Navbar.styles'

const Navbar: React.FC = (): JSX.Element => {
  const { height } = useScrollHeight()
  return (
    <Header isSmall={height > 180}>
      <Nav>
        <LinkGroup>
          <Link isSmall={height > 180}>
            <NextLink href="/">Główna</NextLink>
          </Link>
          <Link isSmall={height > 180}>
            <NextLink href="/products">Produkty</NextLink>
          </Link>
        </LinkGroup>
        <NextLink href="/">
          <Logo src="/logo.png" isSmall={height > 180} loading="lazy" />
        </NextLink>
        <LinkGroup>
          <Link style={{ textAlign: 'end' }} isSmall={height > 180}>
            <NextLink href="/blog">Nasz blog</NextLink>
          </Link>
          <Link style={{ textAlign: 'end' }} isSmall={height > 180}>
            <NextLink href="/#contact">Kontakt</NextLink>
          </Link>
        </LinkGroup>
      </Nav>
    </Header>
  )
}

export default Navbar
