import React from 'react'
import { Product } from 'types/types'
import Image from 'next/image'
import Link from 'next/link'
import {
  ContentContainer,
  ProductContainer,
  ProductsWrapper,
  SeeMoreLink,
  ShortDescription,
  Wrapper,
} from './Product.styles'

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
              width={300}
              height={200}
              src={el.photos[0].responsiveImage.src}
              objectFit="cover"
              loading="lazy"
            />
            <ContentContainer>
              <h5>{el.title}</h5>
              <ShortDescription> {el.shortDescription}</ShortDescription>
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
