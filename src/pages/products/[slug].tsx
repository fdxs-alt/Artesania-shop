import { request } from '@api'
import { Contact, Description, Layout, ProductSlider } from '@components'
import { PRODUCT_PARAMS, PRODUCT_QUERY } from '@api'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Product } from '../../types/types'
import styled from 'styled-components'

interface Props {
  product: Product
}

const Wrapper = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 100px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.sizes.laptop}) {
    flex-direction: column;
  }
`

const SingleProduct: React.FC<Props> = ({ product }) => {
  return (
    <Layout
      title={`Artesania | ${product.title}`}
      url={`/products/${product.slug}`}
    >
      <Wrapper>
        <ProductSlider photos={product.photos} />
        <Description product={product} />
      </Wrapper>
      <Contact
        title="Zaintersowany? Napisz do nas!"
        text="Skontaktuj się z nami w sprawie zamówienia, a na pewno się odezwiemy!"
      />
    </Layout>
  )
}

export default SingleProduct

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { product }: { product: Product } = await request({
    query: PRODUCT_QUERY,
    variables: { slug: params.slug },
  })

  return { props: { product } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { allProducts }: { allProducts: { slug: 'string' }[] } = await request({
    query: PRODUCT_PARAMS,
  })

  return {
    paths: [...allProducts.map((el) => ({ params: { slug: el.slug } }))],
    fallback: false,
  }
}
