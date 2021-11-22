import { useState, useEffect } from 'react'

import { Conteiner, Content, NewsConteiner, TextConteiner, TextId, Title, Button } from './styled'
import { Head } from '../../components'
import get from '../../services/news/get'
import deleteNews from '../../services/news/delete'

function ListNews() {
  const [allNews, setAllNews] = useState([])
  const [lockedFunction, setLockedFunction] = useState(false)

  useEffect(() => {
    const update = async () => setAllNews(await get.all())
    update()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Conteiner>
      <Head title="The News - Lista de Notícias" />
      <Content>
        {allNews[0]
          ? allNews.map(news => (
              <NewsConteiner key={news._id}>
                <TextConteiner>
                  <TextId children={news._id} />
                  <Title children={news.title} />
                </TextConteiner>
                <Button
                  children="Deletar"
                  onClick={() =>
                    deleteNews(news._id, allNews, setAllNews, lockedFunction, setLockedFunction)
                  }
                />
              </NewsConteiner>
            ))
          : ''}
      </Content>
    </Conteiner>
  )
}

export default ListNews
