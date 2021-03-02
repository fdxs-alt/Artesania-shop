import React from 'react'
import {
  Icon,
  Icons,
  IconsWrapper,
  IconText,
  Title,
  Wrapper,
  WrapperText,
} from './AboutProducts.styles'

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
    text: 'Naturalne kosmetyki do pielęgnacji – domowe SPA.',
    iconPath: '/soap.svg',
    alt: 'soap',
  },
  {
    text: 'Zioła dla zdrowia, urody i dobrego samopoczucia.',
    iconPath: '/bowl.svg',
    alt: 'bowl',
  },
  {
    text: 'Relaks w naturalnym stylu.',
    iconPath: '/herbal-tea.svg',
    alt: 'herbal',
  },
]

const paragraphText =
  'Jesteśmy zwykłą rodziną preferującą zdrowy, proekologiczny, ale nie ortodoksyjny styl bycia i życia. Nasza działalność opiera się na subtelnym, wielopłaszczyznowym poradnictwie i oferowaniu szerokiego wachlarza produktów na bazie naturalnych składników, bez zbędnej chemii i na każdą kieszeń. Sprawdź naszą ofertę.'
