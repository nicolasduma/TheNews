import { useEffect, useState } from 'react'

import { Conteiner, NoNewsFound } from './styles'
import News from './News'

function vasco(filterTitle, title) {
  let result = []

  if (filterTitle[0]) {
    filterTitle = filterTitle.filter(character => character !== ' ')
    title = title.filter(character => character !== ' ')

    for (let index in filterTitle) {
      result.push(filterTitle[index] === title[index])
    }
  }

  return filterTitle[0] ? result.reduce((total, boolean) => total === boolean, true) : true
}

function NewsConteiner({ allNews, filter }) {
  const [filtedNews, setFiltedNews] = useState([])

  useEffect(() => {
    filter.title = filter.title.trim()

    setFiltedNews(() =>
      allNews.filter(news => {
        return (
          (news.category === filter.category || filter.category === 'all') &&
          vasco(filter.title.toUpperCase().split(''), news.title.toUpperCase().split(''))
        )
      })
    )
  }, [filter, allNews])

  return (
    <section>
      <Conteiner>
        {filtedNews[0] ? (
          filtedNews.map(news => <News key={news._id} {...news} />)
        ) : filter.title ? (
          <NoNewsFound>Nenhuma notícia encontrada</NoNewsFound>
        ) : (
          ''
        )}
      </Conteiner>
    </section>
  )
}

export default NewsConteiner
