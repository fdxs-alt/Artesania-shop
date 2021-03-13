import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 100px auto 200px auto;
  width: 80%;
  max-width: 1200px;
`

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  margin: 0 auto 100px auto;
`
export const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Post = styled.div`
  width: 350px;
  margin: 20px;
  border: 1px solid ${(props) => props.theme.colors.blue};
  box-shadow: 2px 2px 25px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 300ms ease;
  &:hover {
    transform: scale(1.03);

    small {
      color: ${(props) => props.theme.colors.lightGreen};
    }
  }
  div {
    padding: 1.4em 0.8em;
  }
  h6 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.secondary};
  }
  time {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    margin: 15px auto;
    line-height: 1.2;
  }

  small {
    font-size: 18px;
    font-weight: 700;
  }
`
