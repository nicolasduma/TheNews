import { db } from '../../firebase'

function add(lockedFunction, setLockedFunction, stringValue) {
  if (!lockedFunction) {
    setLockedFunction(true)
    try {
      db.collection('categories').add({ category: stringValue })
      alert('Categoria adicionada!')
      setLockedFunction(false)
    } catch (error) {
      alert(`Erro: ${error}`)
      setLockedFunction(false)
    }
  } else alert('Por favor, aguarde!')
}

export default add
