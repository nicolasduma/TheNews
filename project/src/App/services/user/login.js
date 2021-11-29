import { auth } from '../../firebase'

async function login(userEmail, userPassword) {
  try {
    await auth.signInWithEmailAndPassword(userEmail, userPassword)
  } catch (error) {
    console.log(error)
  }
}

export default login
