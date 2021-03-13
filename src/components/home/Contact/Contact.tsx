import React, { useCallback, useReducer } from 'react'
import { Button } from '@styles'
import {
  Wrapper,
  Title,
  Form,
  FormGroup,
  Text,
  Success,
  ErrorMessage,
} from './Contact.styles'

function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function validateName(name: string) {
  const re = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

  return re.test(name)
}
interface Props {
  title: string
  text: string
}

const Contact: React.FC<Props> = ({ title, text }) => {
  const [contactState, setContactState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      name: '',
      message: '',
      error: '',
      success: '',
      loading: false,
    }
  )
  const { email, name, message, loading, success, error } = contactState

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (loading) {
        return
      }
      setContactState({ [e.target.name]: e.target.value.trimLeft() })
    },
    [loading]
  )

  const validate = useCallback(() => {
    return validateEmail(email) && validateName(name) && message.length
  }, [email, name, message])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (loading) {
      return
    }

    if (!validate()) {
      setContactState({ error: 'Niepoprawne dane' })
      return
    }

    setContactState({ loading: true, error: '', success: '' })
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, content: message }),
      })

      if (response.ok) {
        await response.json()
        setContactState({
          success: 'Email wysłany pomyślnie, czekaj na odpowiedź',
          email: '',
          name: '',
          message: '',
        })
      } else {
        setContactState({ error: 'Wystąpił błąd podczas wysyłania wiadomości' })
      }
    } catch (error) {
      setContactState({ error: 'Wystąpił błąd podczas wysyłania wiadomości' })
    } finally {
      setContactState({ loading: false })
      setTimeout(() => {
        setContactState({ error: '', success: '' })
      }, 5000)
    }
  }

  return (
    <Wrapper id="contact">
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="Imię i nazwisko">Imię i nazwisko</label>
          <input
            type="text"
            required
            name="name"
            value={name}
            placeholder="np. Jan Nowak"
            onChange={handleChange}
            disabled={loading}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Twój email</label>
          <input
            type="text"
            required
            name="email"
            value={email}
            placeholder="np. nowakj@gmail.com"
            onChange={handleChange}
            disabled={loading}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Twoja wiadomość...</label>
          <textarea
            required
            name="message"
            value={message}
            placeholder="Twoja wiadomość..."
            rows={10}
            onChange={handleChange}
            disabled={loading}
          />
        </FormGroup>
        <Button type="submit" disabled={loading}>
          {loading ? 'Wysyłanie...' : 'Wyślij'}
        </Button>
        {success && <Success>{success}</Success>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </Wrapper>
  )
}

export default Contact
