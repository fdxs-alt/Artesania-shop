import { BLOG_QUERY, request } from '@api'
import { Layout } from '@components'
import { GetServerSideProps } from 'next'
import React from 'react'
import styled from 'styled-components'
import { Content } from 'types/types'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
  allArticles: Content[]
}

const Wrapper = styled.div`
  margin: 100px auto 200px auto;
  width: 80%;
  max-width: 1200px;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  margin: 0 auto 100px auto;
`
const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Post = styled.div`
  width: 350px;
  margin: 20px;
  border: 1px solid ${(props) => props.theme.colors.blue};
  box-shadow: 2px 2px 25px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 300ms ease;
  &:hover {
    transform: scale(1.03);

    small {
      color: ${(props) => props.theme.colors.lightGreen};
    }
  }
  div {
    padding: 1.4em 0.8em;
  }
  h6 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.secondary};
  }
  time {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    margin: 15px auto;
    line-height: 1.2;
  }

  small {
    font-size: 18px;
    font-weight: 700;
  }
`

const Blog: React.FC<Props> = ({ allArticles }) => {
  return (
    <Layout title="Artesania | Blog">
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
