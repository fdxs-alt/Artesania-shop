import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
`

export const InnerFooter = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 120px;
  align-self: center;
`
export const Column = styled.div`
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
