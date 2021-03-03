import styled from 'styled-components'

interface ILogo {
  isSmall: boolean
}

export const Header = styled.header<ILogo>`
  width: 100%;
  position: sticky;
  top: ${(props) => (props.isSmall ? '0' : '10px')};
  background-color: rgba(246, 255, 248, 0.98);
  z-index: 100;
`
export const Nav = styled.nav`
  max-width: 1200px;
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  transition: padding 300ms ease;
  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`
export const Logo = styled.img<ILogo>`
  transform: scale(${(props) => (props.isSmall ? '0.9' : '1.2')});
  transition: transform 300ms ease;
  width: 100px;
  height: 100px;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 90px;
    height: 90px;
  }
`
export const Link = styled.li<ILogo>`
  width: 150px;
  transition: transform 300ms ease;
  transform-origin: center;

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

  &:hover {
    transform: scale(1.05);
  }
`
export const LinkGroup = styled.div`
  display: flex;
`

export const SmallMenu = styled.nav`
  display: none;
  width: 100%;
  justify-content: space-between;
  padding: 5px 20px;
  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: flex;
  }
`

export const MenuButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  outline: none;
  width: fit-content;
`

interface Open {
  isOpen: boolean
}

export const Wrapper = styled.div<Open>`
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
export const LinksWrapper = styled.div<Open>`
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
