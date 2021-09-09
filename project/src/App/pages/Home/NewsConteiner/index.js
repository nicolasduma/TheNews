import { useState, useEffect } from 'react'

import { Conteiner } from './styles'

import News from './News'
import get from '../../../services/news/get'

function NewsConteiner() {
  const [allNews, setAllNews] = useState([])

  useEffect(() => {
    const update = async () => setAllNews(await get.all())
    update()
  }, [])

  return (
    <section>
      <Conteiner>
        {allNews.map(news => (
          <News key={news._id} {...news} />
        ))}
      </Conteiner>
    </section>
  )
}

export default NewsConteiner
