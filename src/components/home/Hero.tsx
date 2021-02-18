import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.section`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
`
const Container = styled.div`
  width: 80%;
  max-width: 1400px;
  margin: auto;
  justify-content: space-between;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 50%;
`
const title =
  'Sklep Artesania to wszystko, czego potrzebujesz, by zacząć zdrowy tryb życia.'

const TitleContainer = styled.div`
  width: 40%;

  h2 {
    max-width: 500px;
    font-weight: 700;
  }
  h4 {
    margin-top: 30px;
  }

  button {
    color: white;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 18px 24px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    margin-top: 20px;
    min-width: 200px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    outline: none;
  }
`

const Hero: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <h2>{title}</h2>
          <button>Sprawdź sam</button>
        </TitleContainer>
        <Image src="/tree.png" alt="" />
      </Container>
    </Wrapper>
  )
}

export default Hero
