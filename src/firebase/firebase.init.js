import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebase.config'


// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()


// Store user data to firestore db
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()  // query documentRef object

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })

    } catch (error) {
      console.log('Error creating a user :', error.message);
    }
  }

  return userRef
}


// Google Provider Auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase 