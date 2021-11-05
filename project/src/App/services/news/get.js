import { db, storage } from '../../firebase'

const newsCollection = db.collection('news')

const cover = async id => {
  const ref = storage.ref(`/Images/${id}.jpg`)

  return await ref.getDownloadURL().then(url => url)
}

const all = async () => {
  const snapshot = await newsCollection.get()
  let docs = []

  snapshot.forEach(doc => {
    const data = doc.data()
    data.created = new Date(data.created.seconds * 1000)

    docs.push({ _id: doc.id, ...data })
  })

  docs.forEach(async doc => (doc.cover = await cover('IMG_20210823_212319')))

  console.log(docs)

  return docs.sort((a, b) => (a.created > b.created ? -1 : a.created < b.created ? 1 : 0))
}

const newsById = async id => {
  const snapshot = await newsCollection.doc(id).get()
  return { _id: snapshot.id, ...snapshot.data() }
}

const services = { all, newsById, cover }

export default services
