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

export const getWithId = async () => {
  const snapshot = await categoriesCollection.get()
  let docs = []

  snapshot.forEach(doc => docs.push([doc.id, doc.data().category]))
  return docs.sort((a, b) => {
    ;[a[1], b[1]] = [a[1].toUpperCase(), b[1].toUpperCase()]

    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0
  })
}

export default service
