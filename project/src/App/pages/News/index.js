import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Conteiner, Come, Title, Category, Description, Source } from './styles'
import get from '../../services/news/get'

function News() {
  const [news, setNews] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const update = async () => {
      const allNews = await get.all()
      setNews(allNews.filter(doc => doc._id === id)[0])
    }
    update()
  }, [id])
  return (
    <Conteiner>
      <Come children="Voltar" />
      <Title children={news.title} />
      <Category children={news.category} />
      <Description children={news.description} />
      <Source children={news.source} />
    </Conteiner>
  )
}

export default News
