import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
const GlobalStyles = createGlobalStyle`
    ${reset}
    h1 {
        font-size: 45px;
    }
    h2 {
        font-size: 36px;
    }
    h3 {
        font-size: 30px;
    }
    h4 {
        font-size: 24px
    }
    h5 {
        font-size: 20px
    }
    p, h6 {
        font-size: 18px;
    }
    body {
        font-family: 'Nunito Sans', sans-serif;
        height: 100%;
        width: 100%;
        background-color: ${(props) => props.theme.colors.white}
    }
    li, ol {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: initial;
    }

`

export { GlobalStyles }
