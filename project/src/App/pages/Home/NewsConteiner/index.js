import { Conteiner } from './styles'
import News from './News'
import { useEffect } from 'react'

function NewsConteiner({ allNews, filter }) {
  useEffect(() => {
    console.log(filter)
  }, [filter])

  return (
    <section>
      <Conteiner>
        {allNews.map(news => (
          <News key={news._id} {...news} />
        ))}
      </Conteiner>
    </section>
  )
}

export default NewsConteiner
