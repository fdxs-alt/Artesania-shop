import { request } from '@api'
import { Layout } from '@components'
import { PRODUCT_PARAMS, PRODUCT_QUERY } from 'api/query'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Product } from '../../types/types'

interface Props {
  product: Product
}
const SingleProduct: React.FC<Props> = ({ product }) => {
  return (
    <Layout
      title={`Artesania | ${product.title}`}
      url={`products/${product.slug}`}
    >
      {JSON.stringify(product)}
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
