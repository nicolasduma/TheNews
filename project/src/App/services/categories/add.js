import { db } from '../../firebase'

async function add(lockedFunction, setLockedFunction, stringValue) {
  if (!lockedFunction) {
    setLockedFunction(true)
    try {
      await db.collection('categories').add({ category: stringValue })
      alert('Categoria adicionada!')
      setLockedFunction(false)
    } catch (error) {
      alert(`Erro: ${error}`)
      setLockedFunction(false)
    }
  } else alert('Por favor, aguarde!')
}

export default add
