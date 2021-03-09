import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  margin: 150px 0;
  &::before {
    z-index: -1;
    content: '';
    top: 40%;
    position: absolute;
    overflow: hidden;
    width: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    height: 40%;

    @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
      height: 60%;
      top: 25%;
    }

    @media (max-width: ${(props) => props.theme.sizes.tablet}) {
      display: none;
    }
  }

  h2 {
    margin: 100px auto;
    max-width: 650px;
    text-align: center;
    font-weight: 700;
  }
`

export const ProductsWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const ProductContainer = styled.div`
  max-width: 300px;
  margin: 20px;
  height: 375px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 25px 6px rgba(0, 0, 0, 0.15);
  transition: transform 300ms ease;
  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    margin-bottom: 30px;
    width: 400px;
    max-width: unset;
  }

  @media (max-width: ${(props) => props.theme.sizes.phone}) {
    width: 300px;
  }

  &:hover {
    transform: scale(1.03);
  }

  img {
    @media (max-width: ${(props) => props.theme.sizes.tablet}) {
      margin-bottom: 30px;
      height: 200px !important;
    }

    @media (max-width: ${(props) => props.theme.sizes.phone}) {
      width: 300px !important;
    }
  }
`

export const ContentContainer = styled.div`
  padding: 18px;
  height: 175px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: black;
  h5 {
    font-weight: 600;
  }
`

export const SeeMoreLink = styled.div`
  border: none;
  width: fit-content;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  font-family: 'Raleway', sans-serif;
  transition: transform 300ms ease;
  text-decoration: underline;
  &:hover {
    transform: scale(1.03);
  }
`
export const ShortDescription = styled.small`
  font-size: 14px;
  font-weight: 500;
`
