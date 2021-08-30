import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles'

import { Head } from './components'
import Routes from './Routes'

function App() {
  return (
    <div>
      <Head htmlAttributes={{ lang: 'pt-br' }} />

      <GlobalStyle />

      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
