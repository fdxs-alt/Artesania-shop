import styled from 'styled-components'

interface IStep {
  isTop?: boolean
}

export const Wrapper = styled.section`
  width: 80%;
  margin: 100px auto 100px auto;
  max-width: 1000px;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 95%;
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  max-width: 500px;
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 26px;
  }
`

export const Steps = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 450px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    height: 200px;
  }
`

export const Step = styled.div<IStep>`
  width: 25%;
  align-self: ${({ isTop }) => (isTop ? 'flex-start' : 'flex-end')};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 30%;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    margin-top: 15px;
    @media (max-width: ${(props) => props.theme.sizes.tablet}) {
      font-size: 14px;
    }
  }
`

export const ImgContainer = styled.div`
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

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 55px;
    height: 55px;
  }

  img {
    width: 60px;
    height: 60px;

    @media (max-width: ${(props) => props.theme.sizes.tablet}) {
      width: 40px;
      height: 40px;
    }
  }
`

export const Arrow = styled.div`
  position: absolute;

  height: 8px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 20px;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`
