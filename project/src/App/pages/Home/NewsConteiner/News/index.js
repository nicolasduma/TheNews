import { Conteiner, Image } from './style'

import { Link } from 'react-router-dom'

import ImageSrc from '../../../../assets/images/newspaper.jpg'

function News({ id, title, category, source }) {
  return (
    <Conteiner key={id}>
      <Image alt={title} src={ImageSrc} />
      <div>
        <h2>{title}</h2>
        <div>
          <p>Categoria: {category}</p>
          <p>Fonte: {source}</p>
        </div>
        <Link to={`/news/${id}`}>Ler notícia</Link>
      </div>
    </Conteiner>
  )
}

export default News
