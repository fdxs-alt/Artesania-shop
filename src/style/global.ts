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
        font-size: 24px;
    }
    h5 {
        font-size: 20px;
    }
    p, h6 {
        font-size: 18px;
    }
    *, ::after, ::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        scroll-behavior: smooth;
        font-family: 'Raleway', sans-serif;
        background-color: ${(props) => props.theme.colors.primary};

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
