import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Head } from '../../components'
import { Conteiner, Content, Title, Description, Source } from './styles'
import get from '../../services/news/get'

function News() {
  const [news, setNews] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const update = async () => {
      setNews(await get.newsById(id))
    }
    update()
  }, [id])
  return (
    <Conteiner>
      {news._id ? (
        <Content>
          <Head htmlAttributes={{ lang: 'pt-br' }} title={`TheNews - ${news.title}`} />

          <Link to="/" children="Voltar" />
          <Title children={news.title} />
          <Description children={news.description} />
          <Source children={`Fonte: ${news.source}`} />
        </Content>
      ) : (
        ''
      )}
    </Conteiner>
  )
}

export default News
