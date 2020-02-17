import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  *,
  *:before,
  *:after{
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

  html {
    font-size: 62.5%; 
  }

  body {
    box-sizing: border-box; 
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 1.6;
    background-color: #fafafa;
    padding: 3% 5%;
    justify-content: end;
  }

  a {
    text-decoration: none;
    color: #202020;
  }

  img {
    display: block;
    max-width: 100%
  }

  h1 { font-size: 3.6em; }
  h2 { font-size: 3em; }
  h3 { font-size: 2.4em; }
  h4 { font-size: 1.8em; }
  h5 { font-size: 1.4em; }
  h6 { font-size: 1.2em; }

`

export default GlobalStyle