import React from 'react'
import { Button } from '@styles'
import { Wrapper, Title, Form, FormGroup, Text } from './Contact.styles'

const Contact = () => {
  return (
    <Wrapper id="contact">
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
