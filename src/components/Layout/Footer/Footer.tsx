import React from 'react'
import Link from 'next/link'
import { FooterWrapper, InnerFooter, Column, Logo } from './Footer.styles'

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
