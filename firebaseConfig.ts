// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAz7CLRCc_68A99EBF6Bp3pmBjpKX3IPo",
  authDomain: "baginners.firebaseapp.com",
  projectId: "baginners",
  storageBucket: "baginners.firebasestorage.app",
  messagingSenderId: "663458871797",
  appId: "1:663458871797:web:9701c002503f7b4df688bc",
  measurementId: "G-EE3VDF3KED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
