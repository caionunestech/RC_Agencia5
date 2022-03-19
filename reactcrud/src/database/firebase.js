import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyAfuXc7B6ibY6ptwraPkdvKRGsF37Aek3I',
  authDomain: 'reactcrud-5c4fb.firebaseapp.com',
  projectId: 'reactcrud-5c4fb',
  storageBucket: 'reactcrud-5c4fb.appspot.com',
  messagingSenderId: '551914298023',
  appId: '1:551914298023:web:4c5f80fc5955bdfb7e5982'
}

let fireDb = firebase.initializeApp(firebaseConfig)

export default fireDb.database().ref()
