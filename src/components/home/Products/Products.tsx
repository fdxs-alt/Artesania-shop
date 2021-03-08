import React from 'react'
import styled from 'styled-components'
import { Product } from 'types/types'
import Image from 'next/image'
import Link from 'next/link'

export const Wrapper = styled.section`
  width: 100%;
  padding: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  h2 {
    margin: auto;
    margin-bottom: 50px;
    max-width: 650px;
    text-align: center;
    font-weight: 600;
  }
`

const ProductsWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`
const ProductContainer = styled.div`
  width: 350px;
  margin: 10px;
  min-height: 300px;
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 4px;
  text-align: center;
  div {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    margin-bottom: 30px;
    width: 90%;
  }
`

const ContentContainer = styled.div`
  padding: 10px;
  height: 100%;

  h5 {
    font-weight: 500;
    font-style: italic;
  }
`

const SeeMoreLink = styled.div`
  border: none;
  border-bottom: none !important;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 20px;
  min-width: 200px;
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

interface Props {
  allProducts: Product[]
}

const Products: React.FC<Props> = ({ allProducts }) => {
  return (
    <Wrapper id="products">
      <h2>Sprawdź własnoręcznie wytworzone przez nas produkty</h2>
      <ProductsWrapper>
        {allProducts.map((el) => (
          <ProductContainer key={el.id}>
            <Image
              width={350}
              height={200}
              src={el.photos[0].responsiveImage.src}
              objectFit="cover"
              loading="lazy"
            />
            <ContentContainer>
              <h5>{el.title}</h5>
              <Link href={`products/${el.slug}`}>
                <SeeMoreLink>Zobacz więcej</SeeMoreLink>
              </Link>
            </ContentContainer>
          </ProductContainer>
        ))}
      </ProductsWrapper>
    </Wrapper>
  )
}

export default Products
