import styled from 'styled-components'

export const ContentWrapper = styled.div`
  max-width: 600px;
  width: 50%;

  @media (max-width: ${(props) => props.theme.sizes.laptop}) {
    max-width: 1000px;
    width: 95%;
    margin-top: 100px;

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  h4 {
    font-size: 24px;
    padding: 20px 0;
  }

  h5 {
    font-size: 22px;
    line-height: 1.4;
  }

  p,
  h6 {
    font-size: 18px;
    padding: 5px 0;
    font-weight: 500;
    text-align: justify;
    line-height: 1.8;
  }

  li {
    list-style-type: circle;
    list-style-position: inside;
    font-size: 18px;
    padding: 5px 0;
    line-height: 1.8;
    font-weight: 500;
  }

  h2 {
    font-weight: 600;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: underline;
  }

  h5 {
    font-weight: 600;
    margin-bottom: 20px;
    text-align: justify;
  }
`
