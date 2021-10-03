import { useState, useEffect } from 'react'

import { Head } from '../../components'
import Header from './Header'
import NewsConteiner from './NewsConteiner'

import get from '../../services/news/get'

function Home({ allNews }) {
  const [filter, setFilter] = useState({ title: '', category: 'all' })

  return (
    <div className="Home">
      <Head htmlAttributes={{ lang: 'pt-br' }} title="TheNews - Home" />

      <Header setFilter={setFilter} />
      <NewsConteiner filter={filter} allNews={allNews} />
    </div>
  )
}

export default Home
