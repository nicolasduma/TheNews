import { useState } from 'react'

import { Head } from '../../components'
import Header from './Header'
import NewsConteiner from './NewsConteiner'

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
