import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.css'

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
