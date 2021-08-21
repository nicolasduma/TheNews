import './styles.css'

import { Head, Conteiner } from '../../components'
import Header from './Header'

function Home() {
  return (
    <Conteiner className="Home">
      <Head htmlAttributes={{ lang: 'pt-br' }}>
        <title>TheNews - Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
    </Conteiner>
  )
}

export default Home
