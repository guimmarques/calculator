import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

:focus {
    outline: 0;
}

body {
    -webkit-font-smoothing: antialiased;
}

button {
    all: unset;
}

 body,input,textarea,button {
    font: 400 1rem Rubik, sans-serif;
} 
`
