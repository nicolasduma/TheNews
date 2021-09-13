import GlobalStyle from './styles'

import { Head } from './components'
import Routes from './Routes'

function App() {
  return (
    <div>
      <Head htmlAttributes={{ lang: 'pt-br' }} />

      <GlobalStyle />

      <Routes />
    </div>
  )
}

export default App
