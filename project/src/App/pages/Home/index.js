import './styles.css'

import { Head, Conteiner } from '../../components'
import Header from './Header'
import NewsConteiner from './NewsConteiner'

function Home() {
  return (
    <Conteiner className="Home">
      <Head htmlAttributes={{ lang: 'pt-br' }} title="TheNews - Home">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <NewsConteiner />
    </Conteiner>
  )
}

export default Home
