import { useEffect, useState } from 'react'

import { Head } from '../../components'
import Header from './Header'
import NewsConteiner from './NewsConteiner'

import get from '../../services/news/get'

function Home({ allNews, setAllNews }) {
  const [filter, setFilter] = useState({ title: '', category: 'all' })

  useEffect(() => {
    const update = async () => setAllNews(await get.all())
    update()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="Home">
      <Head htmlAttributes={{ lang: 'pt-br' }} title="TheNews - Home" />

      <Header setFilter={setFilter} />
      <NewsConteiner filter={filter} allNews={allNews} />
    </div>
  )
}

export default Home
