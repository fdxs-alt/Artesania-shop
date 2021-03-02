import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`

const Products = () => {
  return <Wrapper>PRODUKTY</Wrapper>
}

export default Products
