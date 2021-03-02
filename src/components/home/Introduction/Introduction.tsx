import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 80%;
  margin: 100px auto 100px auto;
  max-width: 1000px;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  max-width: 500px;
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;
`

const Steps = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 450px;
  text-align: center;
`

interface IStep {
  isTop?: boolean
}

const Step = styled.div<IStep>`
  width: 25%;
  align-self: ${({ isTop }) => (isTop ? 'flex-start' : 'flex-end')};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  p {
    font-weight: 600;
    font-size: 16px;
    margin-top: 15px;
  }
`

const ImgContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-sizing: content-box;
  padding: 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${(props) => props.theme.colors.secondary};
  box-shadow: 2px 2px 15px 6px rgba(0, 0, 0, 0.1);
  img {
    width: 60px;
    height: 60px;
  }
`

const Arrow = styled.div`
  position: absolute;

  height: 8px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
`

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
