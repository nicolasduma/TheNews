import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.css'

import './assets/fonts/styles.css'
import './assets/fonts/tommy-regular.woff2'

import { Head, Conteiner } from './components'
import Routes from './Routes'

function App() {
  return (
    <Conteiner>
      <Head htmlAttributes={{ lang: 'pt-br' }}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Router>
        <Routes />
      </Router>
    </Conteiner>
  )
}

export default App
