import { db } from '../../firebase'

const newsCollection = db.collection('news')

const all = async () => {
  const snapshot = await newsCollection.get()
  let docs = []

  snapshot.forEach(doc => docs.push({ _id: doc.id, ...doc.data() }))
  return docs
}

const services = { all }

export default services
