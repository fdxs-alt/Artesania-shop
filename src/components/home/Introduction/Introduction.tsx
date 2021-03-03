import React from 'react'
import {
  Arrow,
  ImgContainer,
  Step,
  Steps,
  Title,
  Wrapper,
} from './Introduction.styles'

const Introduction = () => {
  return (
    <Wrapper>
      <Title style={{ marginBottom: '50px' }}>Jeśli chciałbyś:</Title>
      <Steps>
        {steps.map(({ iconPath, isTop, text }, i) => (
          <Step key={i} isTop={isTop}>
            <p>{text}</p>
            <ImgContainer>
              <img src={iconPath} alt="" />
            </ImgContainer>
          </Step>
        ))}
        <Arrow style={{ left: '30%', bottom: '20px', width: '40%' }} />
        <Arrow
          style={{
            right: '15%',
            top: '220px',
            transform: 'rotate(45deg)',
            width: '25%',
          }}
        />

        <Arrow
          style={{
            left: '15%',
            top: '220px',
            transform: 'rotate(-45deg)',
            width: '25%',
          }}
        />
      </Steps>

      <Title style={{ marginTop: '50px' }}>to trafiłeś idealnie!</Title>
    </Wrapper>
  )
}

const steps = [
  {
    text: 'Odzyskać duchową i fizyczną równowagę',
    isTop: false,
    iconPath: '/balance.svg',
  },
  {
    text: 'Rozpocząć nowy, cudowny rozdział Twojego życia w harmonii z naturą.',
    isTop: true,
    iconPath: '/fish.svg',
  },
  {
    text: 'Odnaleźć wewnętrzną radość i spokój w niełatwej codzienności',
    isTop: false,
    iconPath: '/affection.svg',
  },
]

export default Introduction
