import React from 'react'
import { SingleProduct } from 'types/types'
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
  allProducts: SingleProduct[]
}

const Products: React.FC<Props> = ({ allProducts }) => {
  return (
    <Wrapper id="products">
      <h2>Sprawdź własnoręcznie wytworzone przez nas produkty</h2>
      <ProductsWrapper>
        {allProducts.map((el) => (
          <Link href={`products/${el.slug}`} key={el.id} passHref={true}>
            <ProductContainer key={el.id}>
              <Image
                width={300}
                height={200}
                src={el.photo.responsiveImage.src}
                objectFit="cover"
                loading="lazy"
              />
              <ContentContainer>
                <h5>{el.title}</h5>
                <ShortDescription> {el.shortDescription}</ShortDescription>
                <SeeMoreLink>Zobacz więcej</SeeMoreLink>
              </ContentContainer>
            </ProductContainer>
          </Link>
        ))}
      </ProductsWrapper>
    </Wrapper>
  )
}

export default Products
