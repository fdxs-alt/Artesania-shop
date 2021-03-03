import React from 'react'
import { Button } from '@styles'
import { Wrapper, Container, Image, TitleContainer } from './Hero.styles'

export const title =
  'Sklep Artesania to wszystko, czego potrzebujesz, by zacząć zdrowy tryb życia.'

const Hero: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <h2>{title}</h2>
          <Button primary type="button">
            Sprawdź nasze produkty
          </Button>
        </TitleContainer>
        <Image src="/tree.png" alt="tree-logo" />
      </Container>
    </Wrapper>
  )
}

export default Hero
