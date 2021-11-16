import { db } from '../../firebase'
import { doc } from 'firebase/firestore'

const deleteCategory = async id => {
  console.log(doc(db, 'categories', id))
}

export default deleteCategory
