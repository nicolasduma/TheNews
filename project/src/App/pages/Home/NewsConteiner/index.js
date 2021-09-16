import { Conteiner } from './styles'
import News from './News'

function NewsConteiner({ allNews }) {
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
