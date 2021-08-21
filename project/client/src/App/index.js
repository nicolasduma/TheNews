import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.css'

import './assets/fonts/styles.css'
import './assets/fonts/tommy-regular.woff2'

import { Conteiner } from './components'
import Routes from './Routes'

function App() {
  return (
    <Conteiner>
      <Router>
        <Routes />
      </Router>
    </Conteiner>
  )
}

export default App
