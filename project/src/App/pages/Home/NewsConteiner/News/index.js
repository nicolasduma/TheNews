import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import get from '../../../../services/news/get'

import { Conteiner, Cover, PseudoCover } from './style'

function News({ _id, title, category, source }) {
  const [cover, setCover] = useState('')

  useEffect(() => {
    const update = async () => setCover(await get.cover('IMG_20210823_212319'))
    update()
  })

  return (
    <Conteiner key={_id}>
      {cover ? <Cover alt={title} src={cover} /> : <PseudoCover />}
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
