import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    margin-bottom: 100px;
  }
`
export const Container = styled.div`
  width: 80%;
  max-width: 1400px;
  margin: auto;
  justify-content: space-between;
  display: flex;
  align-items: center;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    width: 95%;
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    flex-direction: column-reverse;
  }
`

export const Image = styled.img`
  width: 50%;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 80%;
  }
`

export const TitleContainer = styled.div`
  width: 40%;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    max-width: 500px;
    font-weight: 700;

    @media (max-width: ${(props) => props.theme.sizes.tablet}) {
      text-align: center;
      max-width: 600px;
    }
  }
  h4 {
    margin-top: 30px;
  }
`
