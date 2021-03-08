import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import { Button } from '@styles'
import { Content } from 'types/types'
import {
  Wrapper,
  FeaturedBlogPosts,
  InnerContent,
  Post,
  Title,
} from './Blog.styles'

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
          <Link href={`/blog/${el.slug}`} key={el.id}>
            <Post
              style={{
                backgroundImage: `url(${el.photo.responsiveImage.src})`,
              }}
            >
              <InnerContent>
                <h4>{el.title}</h4>
                <time>{el.date}</time>
                <p>{el.heading}</p>
                <small>Kontynuuj czytanie</small>
              </InnerContent>
            </Post>
          </Link>
        ))}
        {allArticles.map((el) => (
          <Link href={`/blog/${el.slug}`} key={el.id}>
            <Post
              style={{
                backgroundImage: `url(${el.photo.responsiveImage.src})`,
              }}
            >
              <InnerContent>
                <h4>{el.title}</h4>
                <time>{el.date}</time>
                <p>{el.heading}</p>
                <small>Kontynuuj czytanie</small>
              </InnerContent>
            </Post>
          </Link>
        ))}
        {allArticles.map((el) => (
          <Link href={`/blog/${el.slug}`} key={el.id}>
            <Post
              style={{
                backgroundImage: `url(${el.photo.responsiveImage.src})`,
              }}
            >
              <InnerContent>
                <h4>{el.title}</h4>
                <time>{el.date}</time>
                <p>{el.heading}</p>
                <small>Kontynuuj czytanie</small>
              </InnerContent>
            </Post>
          </Link>
        ))}
      </FeaturedBlogPosts>
      <Button onClick={() => router.push('/blog')}>
        Zainteresowany? Zobacz więcej!
      </Button>
    </Wrapper>
  )
}

export default Blog
