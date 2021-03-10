import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  padding: 120px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h3`
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
export const Text = styled.p`
  max-width: 600px;
  margin: auto;
  text-align: center;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 16px;
  }
`

export const Form = styled.form`
  width: 40%;
  min-width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.sizes.laptop}) {
    width: 50%;
  }

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    width: 60%;
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 100%;
  }
`

export const FormGroup = styled.div`
  width: 80%;
  margin: 10px auto;

  label {
    font-size: 16px;
    margin-left: 10px;
    font-weight: 500;
  }

  textarea,
  input {
    width: 100%;
    border: 2px solid ${(props) => props.theme.colors.blue};
    padding: 13px;
    display: block;
    margin-top: 6px;
    border-radius: 8px;
    outline-color: ${(props) => props.theme.colors.secondary};
    font-family: 'Raleway', serif;
    &::placeholder {
      font-family: 'Raleway', serif;
      font-weight: 500;
    }
  }

  textarea {
    resize: none;
  }
`

export const Success = styled.p`
  color: ${(props) => props.theme.colors.lightGreen};
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  margin-top: 20px;
`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  margin-top: 20px;
`
