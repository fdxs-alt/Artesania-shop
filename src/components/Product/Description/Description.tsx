import { Markdown } from '@components'
import React from 'react'
import { Product } from '../../../types/types'
import { ContentWrapper } from './Description.styles'

interface Props {
  product: Product
}

const Description: React.FC<Props> = ({ product }): JSX.Element => {
  return (
    <ContentWrapper>
      <h2>{product.title}</h2>
      <h5>{product.shortDescription}</h5>
      <Markdown content={product.content}></Markdown>
    </ContentWrapper>
  )
}

export default Description
