import { db } from '../../firebase'

const categoriesCollection = db.collection('categories')

const service = async () => {
  const snapshot = await categoriesCollection.get()
  let docs = []

  snapshot.forEach(doc => docs.push(doc))
  return docs
}

export default service
