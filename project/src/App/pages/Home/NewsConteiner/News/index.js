import { Link } from 'react-router-dom'

import { Conteiner, Cover } from './style'

function News({ _id, title, category, source }) {
  return (
    <Conteiner key={_id}>
      <Cover
        alt={title}
        src={`https://firebasestorage.googleapis.com/v0/b/thenews-duma.appspot.com/o/Images%2F${_id}.JPG?alt=media`}
      />
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
