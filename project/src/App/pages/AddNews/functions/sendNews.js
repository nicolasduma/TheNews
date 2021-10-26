import add from '../../../services/news/add'

const addNews = async (
  lockedSend,
  setLockedSend,
  valueCategory,
  valueTitle,
  valueDescription,
  valueSource
) => {
  if (!lockedSend) {
    setLockedSend(true)
    const news = {
      category: valueCategory,
      title: valueTitle,
      description: valueDescription,
      source: valueSource,
      created: new Date(),
      imageSrc:
        'https://firebasestorage.googleapis.com/v0/b/thenews-duma.appspot.com/o/images%2Fnewspaper.jpg?alt=media&token=a08b4fa1-488c-476d-8c9c-9ee47a0720b4',
    }
    try {
      await add(news)
      alert('Noticia adicionada com sucesso!')
      setLockedSend(false)
    } catch {
      alert('Houve um erro, e não foi possível adicionar a notícia!')
      setLockedSend(false)
    }
  } else alert('Por favor, aguarde o envio da notícia!')
}

export default addNews
