import { Conteiner } from './styles'

import News from './News'

function NewsConteiner(props) {
  return (
    <section>
      <Conteiner>
        {props.allNews.map(news => (
          <News {...news} />
        ))}
      </Conteiner>
    </section>
  )
}

export default NewsConteiner
