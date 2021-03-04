import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  margin: 100px auto 30px auto;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.lightGreen};
  text-align: center;
  max-width: 500px;
  margin: 0 auto 30px auto;
  font-weight: 700;
  text-decoration: underline;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 26px;
  }
`

export const FeaturedBlogPosts = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 75px auto 50px auto;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    flex-direction: column;
    margin: 20px auto 50px auto;
  }
`

export const Post = styled.div`
  width: 30%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  margin: 0 10px;

  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  position: relative;
  z-index: 1;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 75%;
    margin-bottom: 30px;
  }

  @media (max-width: ${(props) => props.theme.sizes.phone}) {
    width: 90%;
    margin-bottom: 30px;
  }

  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  transition: transform 300ms ease;
  &:hover {
    transform: scale(1.03);
  }
`
export const InnerContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  cursor: pointer;

  a {
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    text-decoration: underline;
  }

  h4 {
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
  }

  small {
    text-decoration: underline;
  }
`
