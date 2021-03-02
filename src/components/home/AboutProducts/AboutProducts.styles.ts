import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`

export const IconsWrapper = styled.div`
  width: 80%;
  margin: auto;
  max-width: 1200px;
`
export const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Icon = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 65px;
    height: 65px;
    margin-bottom: 20px;
    color: white;
  }
`

export const IconText = styled.p`
  color: ${(props) => props.theme.colors.white};
  max-width: 200px;
  text-align: center;
  font-size: 18px;
`
export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  max-width: 500px;
  margin: 0 auto 30px auto;
  font-weight: 700;
`

export const WrapperText = styled.p`
  max-width: 800px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 auto 90px auto;
  text-align: center;
  line-height: 26px;
`
