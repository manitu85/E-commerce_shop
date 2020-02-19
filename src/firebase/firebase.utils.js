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

  const userRef = firestore.doc(`users/${userAuth.uid}`)  // documentRef object
  const snapShot = await userRef.get()  // query documentRef object

  // const collectionRef = firestore.collection('users')
  // const collectionSnapshot = await collectionRef.get()
  
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
      console.log('Error creating a user :', error.message)
    }
  }

  return userRef
}


// Add collection_data to firestore db
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

// Convert snapshot collections to arr of obj's maps
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollections = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

 return transformCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()]  = collection
    return acc
  } ,{})
  
}

// Google Provider Auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase 