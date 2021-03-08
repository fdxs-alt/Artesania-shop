import React from 'react'
import { SmallButton, Wrapper, LinksWrapper } from './Navbar.styles'
import Image from 'next/image'
import NextLink from 'next/link'

interface Props {
  isOpen: boolean
  close: () => void
}
const MobileMenu: React.FC<Props> = ({ isOpen, close }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <SmallButton
        style={{ alignSelf: 'flex-end', padding: '2em' }}
        onClick={() => close()}
      >
        <Image src="/cancel.svg" alt="close-button" width={25} height={25} />
      </SmallButton>
      <LinksWrapper isOpen={isOpen}>
        <Image src="/logo.png" alt="logo" width={125} height={125} />
        <button onClick={() => close()}>
          <NextLink href="/">Główna</NextLink>
        </button>
        <button onClick={() => close()}>
          <NextLink href="/#products">Produkty</NextLink>
        </button>
        <button onClick={() => close()}>
          <NextLink href="/blog">Nasz blog</NextLink>
        </button>
        <button onClick={() => close()}>
          <NextLink href="/#contact">Kontakt</NextLink>
        </button>
      </LinksWrapper>
    </Wrapper>
  )
}

export default MobileMenu
