import add from '../../../services/news/add'

const addNews = async (valueCategory, valueTitle, valueDescription, valueSource) => {
  const news = {
    category: valueCategory,
    title: valueTitle,
    description: valueDescription,
    source: valueSource,
    created: new Date(),
  }

  try {
    await add(news)
    alert('Noticia adicionada com sucesso!')
  } catch {
    alert('Houve um erro, e não foi possível adicionar a notícia!')
  }
}

export default addNews
