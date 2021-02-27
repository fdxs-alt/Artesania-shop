import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
      gray: string
      dark: string
      lightGreen: string
      blue: string
    }
  }
}
