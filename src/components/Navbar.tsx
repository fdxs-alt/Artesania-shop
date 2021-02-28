import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import { useScrollHeight } from 'shared/useScrollHeight'

interface ILogo {
  isSmall: boolean
}

const Header = styled.header<ILogo>`
  width: 100%;
  position: sticky;
  top: ${(props) => (props.isSmall ? '0' : '10px')};
  background-color: ${(props) => `rgba(246, 255, 248, 0.98)`};
`
const Nav = styled.nav`
  max-width: 1200px;
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  transition: padding 300ms ease;
`
const Logo = styled.img<ILogo>`
  transform: scale(${(props) => (props.isSmall ? '0.9' : '1.2')});
  transition: transform 300ms ease;
  width: 100px;
  height: 100px;
  cursor: pointer;
`
const Link = styled.li<ILogo>`
  width: 150px;
  a {
    width: 100%;
    font-size: ${(props) => (props.isSmall ? '18px' : '20px')};
    font-weight: 700;
    color: ${(props) => props.theme.colors.dark};
    transition: font-size 300ms ease;

    &:hover {
      color: ${(props) => props.theme.colors.lightGreen};
    }
  }
`
const LinkGroup = styled.div`
  display: flex;
`
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
