import { db } from '../../firebase'

const newsCollection = db.collection('news')

const add = async news => await newsCollection.add(news)

export default add
