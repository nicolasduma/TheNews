import { db } from '../../firebase'

const deleteNews = async (id, allNews, setAllNews, lockedFunction, setLockedFunction) => {
  if (!lockedFunction) {
    setLockedFunction(true)
    try {
      await db.collection('news').doc(id).delete()
      alert('Notícia deletada com sucesso!')
      setAllNews(allNews.filter(news => news._id != id))
      setLockedFunction(false)
    } catch (error) {
      alert(`Não foi possivel deletar a categoria \n${error}`)
      setLockedFunction(false)
    }
  } else alert('Por favor, aguarde!')
}

export default deleteNews
