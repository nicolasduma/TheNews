import { db } from '../../firebase'

const categoriesCollection = db.collection('categories')

const service = async () => {
  const snapshot = await categoriesCollection.get()
  let docs = []

  snapshot.forEach(doc => docs.push(doc.data().category))
  return docs.sort((a, b) => {
    ;[a, b] = [a.toUpperCase(), b.toUpperCase()]

    return a < b ? -1 : a > b ? 1 : 0
  })
}

export default service
