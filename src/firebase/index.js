import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBNI-LIKJgqqNETBXDGNXw5dcRoYBiY1Xw',
  authDomain: 'the-shire-eb558.firebaseapp.com',
  projectId: 'the-shire-eb558',
  storageBucket: 'the-shire-eb558.appspot.com',
  messagingSenderId: '891665356224',
  appId: '1:891665356224:web:edf45bac6411769b0a6425'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {
  auth
}
