import { request } from '@api'
import { Contact, Layout, Markdown, ProductSlider } from '@components'
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

const ContentWrapper = styled.div`
  max-width: 600px;
  width: 50%;

  @media (max-width: ${(props) => props.theme.sizes.laptop}) {
    max-width: 1000px;
    width: 95%;
    margin-top: 100px;

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  h4 {
    font-size: 24px;
    padding: 20px 0;
  }

  h5 {
    font-size: 22px;
    line-height: 1.4;
  }

  p,
  h6 {
    font-size: 18px;
    padding: 5px 0;
    font-weight: 500;
    text-align: justify;
    line-height: 1.8;
  }

  li {
    list-style-type: circle;
    list-style-position: inside;
    font-size: 18px;
    padding: 5px 0;
    line-height: 1.8;
    font-weight: 500;
  }

  h2 {
    font-weight: 600;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: underline;
  }

  h5 {
    font-weight: 600;
    margin-bottom: 20px;
    text-align: justify;
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
        <ContentWrapper>
          <h2>{product.title}</h2>
          <h5>{product.shortDescription}</h5>
          <Markdown content={product.content}></Markdown>
        </ContentWrapper>
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
