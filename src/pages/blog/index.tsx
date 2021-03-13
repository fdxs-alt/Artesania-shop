import { BLOG_QUERY, request } from '@api'
import { Layout } from '@components'
import { GetServerSideProps } from 'next'
import React from 'react'
import { Content } from 'types/types'
import Image from 'next/image'
import Link from 'next/link'
import { Post, PostsContainer, Wrapper, BlogTitle as Title } from '@styles'
interface Props {
  allArticles: Content[]
}

const Blog: React.FC<Props> = ({ allArticles }) => {
  return (
    <Layout title="Artesania | Blog" url="blog">
      <Wrapper>
        <Title>Blog</Title>
        <PostsContainer>
          {allArticles.map((article) => (
            <Link href={`/blog/${article.slug}`} key={article.id}>
              <Post>
                <Image
                  src={article.photo.responsiveImage.src}
                  alt=""
                  width={350}
                  height={150}
                  loading="lazy"
                />
                <div>
                  <time>{article.date}</time>
                  <h6>{article.title}</h6>
                  <p>{article.heading}</p>
                  <small>Czytaj dalej</small>
                </div>
              </Post>
            </Link>
          ))}
        </PostsContainer>
      </Wrapper>
    </Layout>
  )
}

export default Blog

export const getServerSideProps: GetServerSideProps = async () => {
  const { allArticles }: { allArticles: Content[] } = await request({
    query: BLOG_QUERY,
  })

  return {
    props: { allArticles },
  }
}
