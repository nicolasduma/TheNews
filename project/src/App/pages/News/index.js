import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Head } from '../../components'
import { Conteiner, Content, Title, Cover, Description, Source, NotFoundNews } from './styles'
import get from '../../services/news/get'

function News({ allNews }) {
  const [news, setNews] = useState({})
  const { id } = useParams()

  useEffect(() => {
    if (allNews[0]) setNews(allNews.filter(news => news._id === id)[0])
    else {
      const update = async () => {
        setNews(await get.newsById(id))
      }
      update()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Conteiner>
      <Head htmlAttributes={{ lang: 'pt-br' }} title={`The News`} />
      {news.title ? (
        <Content>
          <Head htmlAttributes={{ lang: 'pt-br' }} title={`TheNews - ${news.title}`} />

          <Link to="/" children="Voltar" />
          <Title children={news.title} />
          <Cover
            alt={news.title}
            src={`https://firebasestorage.googleapis.com/v0/b/thenews-duma.appspot.com/o/Images%2F${news._id}.JPG?alt=media`}
          />
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
