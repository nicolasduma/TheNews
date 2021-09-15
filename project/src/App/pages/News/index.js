import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Head } from '../../components'
import { Conteiner, Title, Description, Source } from './styles'
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
      <Head htmlAttributes={{ lang: 'pt-br' }} title={`TheNews - ${news.title}`} />

      <Link to="/" children="Voltar" />
      <Title children={news.title} />
      <Description children={news.description} />
      <Source children={`Fonte: ${news.source}`} />
    </Conteiner>
  )
}

export default News
