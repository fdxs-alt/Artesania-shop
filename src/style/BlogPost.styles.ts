import styled from 'styled-components'

export const PostWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 100px auto 150px auto;

  h1 {
    font-size: 30px;
    padding: 20px 0;
  }

  h2 {
    font-size: 28px;
    padding: 20px 0;
  }

  h3 {
    font-size: 26px;
    padding: 20px 0;
  }

  h4 {
    font-size: 24px;
    padding: 20px 0;
  }

  h5 {
    font-size: 22px;
    padding: 20px 0;
  }

  p,
  h6 {
    font-size: 18px;
    padding: 15px 0;
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
`

export const Image = styled.img`
  width: 100%;
  object-position: center;
  object-fit: cover;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.colors.blue};
  box-shadow: 1px 1px 25px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  max-height: 500px;
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px !important;
`

export const Data = styled.time`
  font-size: 18px;
  font-weight: 500;
`
