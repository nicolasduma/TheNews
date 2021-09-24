import { db } from '../../firebase'

const newsCollection = db.collection('news')

const all = async () => {
  const snapshot = await newsCollection.get()
  let docs = []

  snapshot.forEach(doc => docs.push({ _id: doc.id, ...doc.data() }))
  return docs
}

const newsById = async id => {
  const snapshot = await newsCollection.doc(id).get()
  console.log(snapshot)
  return { _id: snapshot.id, ...snapshot.data() }
}

const services = { all, newsById }

export default services
