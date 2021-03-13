import { PATHS_QUERY, POST_QUERY, request } from '@api'
import { Layout, Markdown } from '@components'
import { PostWrapper, Image, Data, Title } from '@styles'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Content } from 'types/types'

interface Props {
  article: Content
}

const SinglePost: React.FC<Props> = ({ article }) => {
  return (
    <Layout title={`Artesania | ${article.title}`} url={`blog/${article.slug}`}>
      <PostWrapper>
        <Image src={article.photo.responsiveImage.src} />
        <Data>Data dodatnia: {article.date}</Data>
        <Title>{article.title}</Title>
        <Markdown content={article.content} />
      </PostWrapper>
    </Layout>
  )
}

export default SinglePost

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { article }: { article: Content } = await request({
    query: POST_QUERY,
    variables: { slug: params.slug },
  })

  return { props: { article } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { allArticles }: { allArticles: { slug: 'string' }[] } = await request({
    query: PATHS_QUERY,
  })

  return {
    paths: [...allArticles.map((el) => ({ params: { slug: el.slug } }))],
    fallback: false,
  }
}
