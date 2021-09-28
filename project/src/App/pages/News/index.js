import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Head } from '../../components'
import { Conteiner, Content, Title, Description, Source, NotFoundNews } from './styles'
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
      <Head htmlAttributes={{ lang: 'pt-br' }} title={`The News`} />
      {news.title ? (
        <Content>
          <Head htmlAttributes={{ lang: 'pt-br' }} title={`TheNews - ${news.title}`} />

          <Link to="/" children="Voltar" />
          <Title children={news.title} />
          <Description children={news.description} />
          <Source children={`Fonte: ${news.source}`} />
        </Content>
      ) : news._id ? (
        <Content>
          <Head htmlAttributes={{ lang: 'pt-br' }} title={`Notícia não encontrada`} />
          <Link to="/" children="Voltar" />
          <NotFoundNews children="Notícia não encontrada" />
        </Content>
      ) : (
        <Content>
          <Head htmlAttributes={{ lang: 'pt-br' }} title={`The News`} />
        </Content>
      )}
    </Conteiner>
  )
}

export default News
