import { Conteiner, Image } from './style'

import { Link } from 'react-router-dom'

import ImageSrc from '../../../../assets/images/newspaper.jpg'

function News({ _id, title, category, source }) {
  return (
    <Conteiner key={_id}>
      <Image alt={title} src={ImageSrc} />
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
