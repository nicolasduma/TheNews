import { createGlobalStyle } from 'styled-components'

export const fonts = {
  raleway: `'Raleway', 'Helvetica', sans-serif`,
  poppins: `'Poppins', 'Helvetica', sans-serif`,
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${fonts.raleway};
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
