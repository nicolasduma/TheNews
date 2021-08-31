import { Conteiner, Image } from './style'

function readNews(id) {
  alert(id)
}

function News({ key, title, category, source }) {
  return (
    <Conteiner key={key}>
      <Image />
      <div>
        <div>
          <h2>{title}</h2>
          <p>Categoria: {category}</p>
          <p>Fonte: {source}</p>
        </div>
        <button onClick={readNews}>Ler notícia</button>
      </div>
    </Conteiner>
  )
}

export default News
