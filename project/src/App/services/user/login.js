import { auth } from '../../firebase'

async function login(userEmail, userPassword) {
  try {
    await auth.signInWithEmailAndPassword(userEmail, userPassword)
    console.log(auth.currentUser)
  } catch (error) {
    console.log(error)
  }
}

export default login
