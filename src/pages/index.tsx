import Hero from '../components/home/Hero'
import Layout from '../components/Layout'
import Blog from '../components/home/Blog'
import AboutProducts from 'components/home/AboutProducts'
import Contact from 'components/home/Contact'
import { GetStaticProps } from 'next'
import { HOME_QUERY, request } from '@api'
import React from 'react'
import { Content } from '../types/types'

interface Props {
  allArticles: Content[]
}
const Home: React.FC<Props> = ({ allArticles }): JSX.Element => {
  return (
    <Layout title="Aretesania | Strona główna">
      <Hero />
      <AboutProducts />
      <Blog allArticles={allArticles} />
      <Contact />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const { allArticles } = await request({
    query: HOME_QUERY,
  })

  return {
    props: { allArticles },
  }
}
