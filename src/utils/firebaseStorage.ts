import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyAeptew669JlUWAKNEtrUkyALRm900LQk0",
    authDomain: "vmeme-e34ec.firebaseapp.com",
    projectId: "vmeme-e34ec",
    storageBucket: "vmeme-e34ec.appspot.com",
    messagingSenderId: "1005773818937",
    appId: "1:1005773818937:web:fb301511cbfedb887551e8",
}

const firebaseApp = initializeApp(firebaseConfig)
export const storage = getStorage(firebaseApp)