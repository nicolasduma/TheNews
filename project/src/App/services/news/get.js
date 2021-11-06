import { db } from '../../firebase'

const newsCollection = db.collection('news')

const all = async () => {
  const snapshot = await newsCollection.get()
  let docs = []

  snapshot.forEach(doc => {
    const data = doc.data()
    data.created = new Date(data.created.seconds * 1000)

    docs.push({ _id: doc.id, ...data })
  })

  return docs.sort((a, b) => (a.created > b.created ? -1 : a.created < b.created ? 1 : 0))
}

const newsById = async id => {
  const snapshot = await newsCollection.doc(id).get()
  return { _id: snapshot.id, ...snapshot.data() }
}

const services = { all, newsById }

export default services
