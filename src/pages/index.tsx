import Hero from '../components/home/Hero/Hero'
import { GetStaticProps } from 'next'
import { HOME_QUERY, request } from '@api'
import React from 'react'
import { Content } from '../types/types'
import { Layout, AboutProducts, Blog, Contact, Introduction } from '@components'

interface Props {
  allArticles: Content[]
}
const Home: React.FC<Props> = ({ allArticles }): JSX.Element => {
  return (
    <Layout title="Aretesania | Strona główna">
      <Hero />
      <Introduction />
      <AboutProducts />
      <Blog allArticles={allArticles} />
      <Contact />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { allArticles } = await request({
    query: HOME_QUERY,
  })

  return {
    props: { allArticles },
  }
}
