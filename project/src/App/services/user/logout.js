import { auth } from '../../firebase'

async function logout() {
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error)
  }
}

export default logout
