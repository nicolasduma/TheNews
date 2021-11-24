import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyDG0FU-GBkTE7xZmtDhN3S0OAR9XIEj7DI',
  authDomain: 'thenews-duma.firebaseapp.com',
  projectId: 'thenews-duma',
  storageBucket: 'thenews-duma.appspot.com',
  messagingSenderId: '963210653094',
  appId: '1:963210653094:web:83a95b3a134ea022f37367',
  measurementId: 'G-1YXP70JGX2',
})

export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()
