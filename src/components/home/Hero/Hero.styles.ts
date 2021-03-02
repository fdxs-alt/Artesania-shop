import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
`
export const Container = styled.div`
  width: 80%;
  max-width: 1400px;
  margin: auto;
  justify-content: space-between;
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 50%;
`

export const TitleContainer = styled.div`
  width: 40%;

  h2 {
    max-width: 500px;
    font-weight: 700;
  }
  h4 {
    margin-top: 30px;
  }
`
