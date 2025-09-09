import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD4bN18C6Y2GM46R1LOZuIFc5YX-rRWFTY",
    authDomain: "firstproject1-d0108.firebaseapp.com",
    projectId: "firstproject1-d0108",
    storageBucket: "firstproject1-d0108.firebasestorage.app",
    messagingSenderId: "514611871935",
    appId: "1:514611871935:web:ac7378e6fffe298cba060a",
    measurementId: "G-VS43HG40E8"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };