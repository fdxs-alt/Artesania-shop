import React from 'react'
import styled from 'styled-components'
import { MenuButton } from './Navbar.styles'
import Image from 'next/image'
import NextLink from 'next/link'
interface Open {
  isOpen: boolean
}

const Wrapper = styled.div<Open>`
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  background-color: ${(props) => props.theme.colors.primary};
  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: flex;
  }
  transition: opacity 600ms ease, transform 400ms ease;
  flex-direction: column;
  z-index: 1000;
  overflow: auto;
  transform: ${(props) =>
    props.isOpen ? 'translate(0,0)' : 'translate(50%, -50%)'};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`
const LinksWrapper = styled.div<Open>`
  width: 80%;
  align-self: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    outline: none;
    background-color: inherit;
    margin-top: 55px;
    border: none;
    transition: transform 300ms ease;
    &:hover {
      color: ${(props) => props.theme.colors.lightGreen};
      transform: scale(1.05);
    }
  }

  a {
    font-size: 26px;
    font-weight: 700;
    cursor: pointer;
    transition: color 300ms ease;
    &:hover {
      color: ${(props) => props.theme.colors.lightGreen};
    }
  }
`

interface Props {
  isOpen: boolean
  close: () => void
}
const MobileMenu: React.FC<Props> = ({ isOpen, close }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <MenuButton
        style={{ alignSelf: 'flex-end', padding: '2em' }}
        onClick={() => close()}
      >
        <Image src="/cancel.svg" alt="close-button" width={25} height={25} />
      </MenuButton>
      <LinksWrapper isOpen={isOpen}>
        <Image src="/logo.png" alt="logo" width={125} height={125} />
        <button onClick={() => close()}>
          <NextLink href="/">Główna</NextLink>
        </button>

        <button onClick={() => close()}>
          <NextLink href="/products">Produkty</NextLink>
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
