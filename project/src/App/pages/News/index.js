import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Conteiner } from './styles'
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

  useEffect(() => {
    if (news._id) {
      console.log(news)
    }
  }, [news])

  return <Conteiner></Conteiner>
}

export default News
