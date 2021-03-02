import { PATHS_QUERY, POST_QUERY, request } from '@api'
import { Layout, Markdown } from '@components'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Content } from 'types/types'
import styled from 'styled-components'

const PostWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 100px auto 150px auto;

  h1 {
    font-size: 30px;
    padding: 20px 0;
  }

  h2 {
    font-size: 28px;
    padding: 20px 0;
  }

  h3 {
    font-size: 26px;
    padding: 20px 0;
  }

  h4 {
    font-size: 24px;
    padding: 20px 0;
  }

  h5 {
    font-size: 22px;
    padding: 20px 0;
  }

  p,
  h6 {
    font-size: 18px;
    padding: 15px 0;
    font-weight: 500;
    text-align: justify;
    line-height: 1.8;
  }
`

const Image = styled.img`
  width: 100%;
  object-position: center;
  object-fit: cover;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.colors.blue};
  box-shadow: 1px 1px 25px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  max-height: 500px;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 32px !important;
`

interface Props {
  article: Content
}

const SinglePost: React.FC<Props> = ({ article }) => {
  return (
    <Layout title={`Artesania | ${article.title}`}>
      <PostWrapper>
        <Image src={article.photo.responsiveImage.src} />
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
