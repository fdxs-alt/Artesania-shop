import Hero from '../components/home/Hero/Hero'
import { GetStaticProps } from 'next'
import { HOME_QUERY, request } from '@api'
import React from 'react'
import { Content, SingleProduct, Product } from '../types/types'
import {
  Layout,
  AboutProducts,
  Blog,
  Contact,
  Introduction,
  Products,
} from '@components'

interface Props {
  allArticles: Content[]
  allProducts: SingleProduct[]
}

const Home: React.FC<Props> = ({ allArticles, allProducts }): JSX.Element => {
  return (
    <Layout title="Artesania | Strona główna" url="">
      <Hero />
      <AboutProducts />
      <Introduction />
      <Products allProducts={allProducts} />
      <Blog allArticles={allArticles} />
      <Contact />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const {
    allArticles,
    allProducts,
  }: { allArticles: Content[]; allProducts: Product[] } = await request({
    query: HOME_QUERY,
  })

  const productsWithOneImage = allProducts.map((product) => ({
    ...product,
    photo: product.photos[0],
  }))

  return {
    props: { allArticles, allProducts: productsWithOneImage },
  }
}
