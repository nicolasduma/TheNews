import { useEffect } from 'react'

import { Head } from '../../components'
import Header from './Header'
import NewsConteiner from './NewsConteiner'

import getNews from '../../services/news/get'

function Home() {
  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className="Home">
      <Head htmlAttributes={{ lang: 'pt-br' }} title="TheNews - Home">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <NewsConteiner />
    </div>
  )
}

export default Home
