import { useState, useEffect } from 'react'

import { Head } from '../../components'
import Header from './Header'
import NewsConteiner from './NewsConteiner'

import get from '../../services/news/get'

function Home() {
  const [allNews, setAllNews] = useState([])
  const [functionForRender, setFunctionForRender] = useState(function () {})

  useEffect(() => {
    const update = async () => setAllNews(await get.all())
    update()
  }, [])

  return (
    <div className="Home">
      <Head htmlAttributes={{ lang: 'pt-br' }} title="TheNews - Home" />

      <Header />
      <NewsConteiner allNews={allNews} />
    </div>
  )
}

export default Home
