import { createGlobalStyle } from 'styled-components'
import "@fontsource/roboto"

export const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}
`