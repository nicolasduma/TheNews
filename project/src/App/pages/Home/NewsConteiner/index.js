import { Conteiner } from './styles'
import News from './News'
import { useEffect, useState } from 'react'

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

    setFiltedNews(
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
        ) : (
          <h3>Nenhuma notícia encontrada.</h3>
        )}
      </Conteiner>
    </section>
  )
}

export default NewsConteiner
