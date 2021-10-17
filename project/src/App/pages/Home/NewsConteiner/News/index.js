import { Conteiner, Cover } from './style'

import { Link } from 'react-router-dom'

function News({ _id, title, imageSrc, category, source }) {
  return (
    <Conteiner key={_id}>
      <Cover alt={title} src={imageSrc} />
      <div>
        <h2>{title}</h2>
        <div>
          <p>Categoria: {category}</p>
          <p>Fonte: {source}</p>
        </div>
        <Link to={`/news/${_id}`}>Ler notícia</Link>
      </div>
    </Conteiner>
  )
}

export default News
