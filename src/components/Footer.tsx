import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 60px;
  background-color: ${(props) => props.theme.colors.lightGreen};
`

const InnerFooter = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterWrapper>
      <InnerFooter>Footer</InnerFooter>
    </FooterWrapper>
  )
}

export default Footer
