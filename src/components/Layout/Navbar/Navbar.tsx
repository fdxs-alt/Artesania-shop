import React, { useState } from 'react'
import NextLink from 'next/link'
import { useScrollHeight } from '@shared'
import {
  Header,
  Nav,
  LinkGroup,
  Logo,
  Link,
  SmallMenu,
  MenuButton,
} from './Navbar.styles'
import MobileMenu from 'components/Layout/Navbar/MobileMenu'
import Image from 'next/image'

const Navbar: React.FC = (): JSX.Element => {
  const { height } = useScrollHeight()
  const [open, setOpen] = useState(false)

  return (
    <>
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
              <NextLink href="/#contact" scroll={true}>
                Kontakt
              </NextLink>
            </Link>
          </LinkGroup>
        </Nav>
        <SmallMenu>
          <Logo src="/logo.png" isSmall={height > 180} loading="lazy" />
          <MenuButton type="button" onClick={() => setOpen(true)}>
            <Image src="/menu.svg" alt="open-button" width={25} height={25} />
          </MenuButton>
        </SmallMenu>
      </Header>
      <MobileMenu isOpen={open} close={() => setOpen(false)} />
    </>
  )
}

export default Navbar
