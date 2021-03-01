import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import { Button } from 'style'
import styled from 'styled-components'
import { Content } from 'types/types'

const Wrapper = styled.section`
  width: 100%;
  margin: 100px auto 30px auto;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  color: ${(props) => props.theme.colors.lightGreen};
  text-align: center;
  max-width: 500px;
  margin: 0 auto 30px auto;
  font-weight: 700;
  text-decoration: underline;
`

const FeaturedBlogPosts = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 75px auto 50px auto;
`

const Post = styled.div`
  width: 30%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;

  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  position: relative;
  z-index: 1;
  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
const InnerContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  a {
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    text-decoration: underline;
  }

  h4 {
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
  }
`
interface Props {
  allArticles: Content[]
}

const Blog: React.FC<Props> = ({ allArticles }): JSX.Element => {
  const router = useRouter()
  return (
    <Wrapper>
      <Title>Nasz blog</Title>
      <FeaturedBlogPosts>
        {allArticles.map((el) => (
          <Post
            key={el.id}
            style={{ backgroundImage: `url(${el.photo.responsiveImage.src})` }}
          >
            <InnerContent>
              <h4>{el.title}</h4>
              <time>{el.date}</time>
              <p>{el.heading}</p>
              <Link href={`/blog/${el.slug}`}>Kontynuuj czytanie!</Link>
            </InnerContent>
          </Post>
        ))}
      </FeaturedBlogPosts>
      <Button onClick={() => router.push('/blog')}>
        Zainteresowany? Zobacz więcej!
      </Button>
    </Wrapper>
  )
}

export default Blog
