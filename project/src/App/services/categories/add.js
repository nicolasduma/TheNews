import { db } from '../../firebase'

function add(lockedFunction, setLockedFunction, stringValue) {
  if (!lockedFunction) {
    db.collection('categories').add({ category: stringValue })
    alert('Categoria adicionada!')
    setLockedFunction(true)
    try {
      setLockedFunction(false)
    } catch (error) {
      alert(`Erro: ${error}`)
      setLockedFunction(false)
    }
  } else alert('Por favor, aguarde!')
}

export default add
