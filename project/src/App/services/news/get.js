import { db } from '../../firebase'

const all = () => {
  let shot

  db.collection('news')
    .get()
    .then(snapshot => (shot = { ...snapshot }))
    .catch(error => {
      if (error) console.log(error)
    })

  console.log(shot)

  // shot.forEach(doc => {
  //   docs.push(doc.data())
  //   console.log(doc.data())
  // }
}

export default all
