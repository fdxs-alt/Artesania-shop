import React from 'react'
import { Button } from '@styles'
import { Wrapper, Container, Image, TitleContainer } from './Hero.styles'
import { useRouter } from 'next/router'

export const title =
  'Sklep Artesania to wszystko, czego potrzebujesz, by zacząć zdrowy tryb życia.'

const Hero: React.FC = (): JSX.Element => {
  const router = useRouter()
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <h2>{title}</h2>
          <Button
            primary
            type="button"
            onClick={() => router.push('#products')}
          >
            Sprawdź nasze produkty
          </Button>
        </TitleContainer>
        <Image src="/tree.png" alt="tree-logo" />
      </Container>
    </Wrapper>
  )
}

export default Hero
