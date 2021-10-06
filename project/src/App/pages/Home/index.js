import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Head } from '../../components'
import Header from './Header'
import NewsConteiner from './NewsConteiner'

function Home({ allNews }) {
  const [filter, setFilter] = useState({ title: '', category: 'all' })
  let location = useLocation()

  useEffect(() => console.log(location.pathname), [])

  return (
    <div className="Home">
      <Head htmlAttributes={{ lang: 'pt-br' }} title="TheNews - Home" />

      <Header setFilter={setFilter} />
      <NewsConteiner filter={filter} allNews={allNews} />
    </div>
  )
}

export default Home
