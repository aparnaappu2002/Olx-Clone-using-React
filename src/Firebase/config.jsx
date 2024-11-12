

import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyCeJOEAP4qcMIYF_RNjIgkrlicu7kIrzQE",
  authDomain: "olx-clone-a3ef6.firebaseapp.com",
  projectId: "olx-clone-a3ef6",
  storageBucket: "olx-clone-a3ef6.appspot.com",
  messagingSenderId: "785164440336",
  appId: "1:785164440336:web:1a5f66d46c602ab1684b95",
  measurementId: "G-K5953GT9L5"
};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase)
const db = getFirestore(firebase)
const storage =getStorage(firebase)

export {firebase,auth,db,storage}
