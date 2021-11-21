import { useState, useEffect } from 'react'

import { Conteiner, Content, NewsConteiner } from './styled'
import { Head } from '../../components'
import get from '../../services/news/get'

function ListNews() {
  const [allNews, setAllNews] = useState([])

  useEffect(() => {
    const update = async () => setAllNews(await get.all())
    update()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Conteiner>
      <Head title="The News - Lista de Notícias" />
      <Content>
        {allNews.map(news => (
          <NewsConteiner key={news._id}>{news.title}</NewsConteiner>
        ))}
      </Content>
    </Conteiner>
  )
}

export default ListNews
