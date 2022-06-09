import { createGlobalStyle } from 'styled-components'
import MetropolisLight from "./assets/fonts/Metropolis-Light.otf"

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

@font-face {
    font-family: 'Metropolis' ;
    src: url(${MetropolisLight});
}

body {
    background-color: #0C0C0C;
}

a {
    text-decoration: none;
    color: #fff;
}

a:hover {
    color: #FFF82B;
    transition: .6s ease-out;
}

`
