import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`

const IconsWrapper = styled.div`
  width: 80%;
  margin: auto;
  max-width: 1200px;
`
const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Icon = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 65px;
    height: 65px;
    margin-bottom: 20px;
    color: white;
  }
`

const IconText = styled.p`
  color: ${(props) => props.theme.colors.white};
  max-width: 200px;
  text-align: center;
  font-size: 18px;
`
const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  max-width: 500px;
  margin: 0 auto 30px auto;
  font-weight: 700;
`

const WrapperText = styled.p`
  max-width: 800px;
  font-size: 22px;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 auto 90px auto;
  text-align: center;
  line-height: 26px;
`
const AboutProducts = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <Title>Czym się zajmujemy?</Title>
        <WrapperText>{paragraphText}</WrapperText>
        <Icons>
          {icons.map((el, i) => (
            <Icon key={i}>
              <img src={el.iconPath} alt={el.alt} />
              <IconText>{el.text}</IconText>
            </Icon>
          ))}
        </Icons>
      </IconsWrapper>
    </Wrapper>
  )
}

export default AboutProducts

const icons = [
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in libero ipsum.',
    iconPath: '/soap.svg',
    alt: 'soap',
  },
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in libero ipsum.',
    iconPath: '/bowl.svg',
    alt: 'bowl',
  },
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in libero ipsum.',
    iconPath: '/herbal-tea.svg',
    alt: 'herbal',
  },
]

const paragraphText =
  'Jesteśmy firmą prozdrowotną. Oferujemy duży wachlarz produktów przygotowanych na bazie naturalnych składników, bez zbędnej chemii.'
