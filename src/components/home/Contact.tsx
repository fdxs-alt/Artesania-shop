import React from 'react'
import { Button } from 'style'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  padding: 120px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  color: ${(props) => props.theme.colors.lightGreen};
  text-align: center;
  max-width: 500px;
  margin: 0 auto 30px auto;
  font-weight: 700;
  text-decoration: underline;
`
const Text = styled.p`
  max-width: 600px;
  margin: auto;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`

const Form = styled.form`
  width: 40%;
  min-width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`

const FormGroup = styled.div`
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

const Contact = () => {
  return (
    <Wrapper>
      <Title>Napisz do nas</Title>
      <Text>{text}</Text>
      <Form>
        <FormGroup>
          <label htmlFor="Imię i nazwisko">Imię i nazwisko</label>
          <input type="text" required name="name" placeholder="np. Jan Nowak" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Twój email</label>
          <input
            type="text"
            required
            name="name"
            placeholder="np. nowakj@gmail.com"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Twoja wiadomość...</label>
          <textarea
            required
            name="name"
            placeholder="Twoja wiadomość..."
            rows={10}
          />
        </FormGroup>
        <Button type="submit">Wyślij</Button>
      </Form>
    </Wrapper>
  )
}

export default Contact

const text =
  'Uzyskasz odpowiedzi na nurtujące Cię pytania nie tylko odnośnie naszej oferty, ale też zdrowego stylu życia – jak przy niewielkiej zmianie nawyków można poprawić jakość swojego życia.'
