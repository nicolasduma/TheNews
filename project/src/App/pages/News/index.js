import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Conteiner } from './styles'
import get from '../../services/news/get'

function News() {
  function getNews() {
    const vasco = useParams
    console.log(vasco())
  }
  const [news, setNews] = useState({})

  useEffect(() => {
    // const update = () => setNews(GetNews())
    // update()
    getNews()
  }, [])

  return <Conteiner></Conteiner>
}

export default News
