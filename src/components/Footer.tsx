import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const FooterWrapper = styled.footer`
  width: 100%;
  padding: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
`

const InnerFooter = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 120px;
  align-self: center;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  p {
    align-items: center;
    align-self: center;
    display: flex;
    padding: 5px 0;
    font-size: 16px;
    margin-top: 10px;
    font-weight: 600;
    text-align: center;
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }

  h6 {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
  }

  h2 {
    font-weight: 600;
  }
  a {
    color: ${(props) => props.theme.colors.white};
    align-self: center;
    cursor: pointer;
  }
`

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterWrapper>
      <InnerFooter>
        <Column>
          <h6>Skontaktuj się z nami poprzez: </h6>
          {adress.map((el, i) => (
            <Link key={i} href={el.link} passHref={true}>
              <a target={el.isMail ? '' : '_blank'}>
                <p>
                  <img src={el.iconPath} alt={el.text} /> {el.text}
                </p>
              </a>
            </Link>
          ))}
          <p>
            Albo przez formularz wyżej {'  '}
            <span role="img" aria-label="smily-face">
              😊
            </span>
          </p>
        </Column>
        <Column>
          <Logo src="/logo.png" alt="logo" />
        </Column>
      </InnerFooter>
    </FooterWrapper>
  )
}

export default Footer

const adress = [
  {
    link: 'mailto:artesania96@wp.pl',
    iconPath: '/email.svg',
    isMail: true,
    text: 'Email',
  },
  {
    link: 'https://www.facebook.com/artesania.naturalniezserca.7',
    iconPath: '/fb.svg',
    isMail: false,
    text: 'Facebook',
  },
  {
    link: 'https://www.instagram.com/artesania_96/',
    iconPath: '/instagram.svg',
    isMail: false,
    text: 'Instagram',
  },
]
