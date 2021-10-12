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
  
  @media (max-width: 1000px) {
    font-size: 9.5px;
  }

  @media (max-width: 400px) {
    font-size: 9.3px;
  }
}

ul,
ol,
li {
  list-style: none;
}

a {
    width: 150px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.3em;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
    background-color: #5bb640;
    color: #ffffff;
    cursor: pointer;

    @media (max-width: 400px) {
      width: 130px;
      height: 43px;
    }
  }
`

export default GlobalStyle
