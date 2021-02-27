import styled from 'styled-components'

interface IButton {
  primary?: boolean
}

export const Button = styled.button<IButton>`
  align-self: center;
  color: white;
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.secondary
      : props.theme.colors.lightGreen};
  padding: 16px 22px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 20px;
  min-width: 200px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: transform 300ms ease;
  &:hover {
    transform: scale(1.03);
  }
`
