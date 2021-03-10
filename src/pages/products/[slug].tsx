import { request } from '@api'
import { Contact, Layout } from '@components'
import { PRODUCT_PARAMS, PRODUCT_QUERY } from 'api/query'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { useState } from 'react'
import { Product } from '../../types/types'
import styled from 'styled-components'

interface Props {
  product: Product
}

const Wrapper = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 200px auto 100px auto;
  display: flex;
  align-items: center;
`

const SliderWrapper = styled.div`
  width: 500px;
`

const SelectedImage = styled.img`
  width: 500px;
  height: 400px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 1px 1px 25px 6px rgba(0, 0, 0, 0.2);
`

const Slider = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 100px;
  margin-top: 20px;
`

const Slide = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  position: absolute;
  transition: all 250ms linear;
  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none;
  cursor: pointer;
`

const InnerSlide = styled.img`
  width: 100%;
  object-fit: cover;
  flex-shrink: 0;
  flex-grow: 1;
`

const SingleProduct: React.FC<Props> = ({ product }) => {
  const [selected, setSelected] = useState(0)
  return (
    <Layout
      title={`Artesania | ${product.title}`}
      url={`/products/${product.slug}`}
    >
      <Wrapper>
        <SliderWrapper>
          <SelectedImage
            src={product.photos[selected].responsiveImage.src}
            loading="lazy"
            alt="product"
          />
          <Slider>
            {product.photos.map((photo, i) => (
              <Slide
                onClick={() => setSelected(i)}
                key={photo.id}
                style={{
                  left: `${i * 32}%`,
                  transform:
                    product.photos.length > 3 &&
                    `translateX(-${selected * (100 / 2)}%)`,
                }}
              >
                <InnerSlide src={photo.responsiveImage.src} />
              </Slide>
            ))}
          </Slider>
        </SliderWrapper>
      </Wrapper>
      <Contact />
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
