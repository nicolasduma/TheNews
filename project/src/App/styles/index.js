import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

html {
  font-size: 10px;
}

ul,
ol,
li {
  list-style: none;
}

a {
  text-decoration: none;
}
`

export default GlobalStyle
