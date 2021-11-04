import { db, storage } from '../../firebase'

const newsCollection = db.collection('news')
const storageRef = storage.ref('/Images')

const add = async news => await newsCollection.add(news)

export const addCover = async image => await storageRef.child(image.name).put(image)

export default add
