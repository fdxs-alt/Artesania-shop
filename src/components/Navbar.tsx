import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

const Header = styled.header`
  width: 100%;
`

const Nav = styled.nav`
  max-width: 1200px;
  padding: 20px;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const Logo = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
`
const Link = styled.li`
  width: 150px;
  a {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.dark};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`
const LinkGroup = styled.div`
  display: flex;
`
const Navbar: React.FC = (): JSX.Element => {
  return (
    <Header>
      <Nav>
        <LinkGroup>
          <Link>
            <NextLink href="/">Główna</NextLink>
          </Link>
          <Link>
            <NextLink href="/products">Produkty</NextLink>
          </Link>
        </LinkGroup>
        <NextLink href="/">
          <Logo src="/logo2.png" />
        </NextLink>
        <LinkGroup>
          <Link style={{ textAlign: 'end' }}>
            <NextLink href="/blog">Nasz blog</NextLink>
          </Link>
          <Link style={{ textAlign: 'end' }}>
            <NextLink href="/#contact">Kontakt</NextLink>
          </Link>
        </LinkGroup>
      </Nav>
    </Header>
  )
}

export default Navbar
