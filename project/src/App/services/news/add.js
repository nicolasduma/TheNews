import { db, storage } from '../../firebase'

const newsCollection = db.collection('news')
const storageRef = storage.ref('/Images')

const add = async news => await newsCollection.add(news)

export const addCover = async fileBase64 => {
  const snapshot = await storageRef.child('Cover.jpg').putString(fileBase64, 'base64')

  return snapshot
}

export default add
