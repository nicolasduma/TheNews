import { db } from '../../firebase'

const deleteCategory = async (id, categories, setCategories, lockedFunction, setLockedFunction) => {
  if (!lockedFunction) {
    setLockedFunction(true)
    try {
      await db.collection('categories').doc(id).delete()
      setCategories(categories.filter(category => category[0] !== id))
      setLockedFunction(false)
    } catch (error) {
      alert(`Não foi possivel deletar a categoria \n${error}`)
      setLockedFunction(false)
    }
  } else alert('Por favor, aguarde!')
}

export default deleteCategory
