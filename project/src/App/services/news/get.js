import { db } from '../../firebase'

const all = () =>
  db
    .collection('news')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => console.log(doc.data()))
    })
    .catch(error => {
      if (error) console.log(error)
    })

export default all
