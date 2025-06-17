import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBrhSsliUABSNEr7c6GbZTyNj205h98ewU',
  authDomain: 'intprep-38be1.firebaseapp.com',
  projectId: 'intprep-38be1',
  storageBucket: 'intprep-38be1.firebasestorage.app',
  messagingSenderId: '104199462805',
  appId: '1:104199462805:web:61664c7e5c5b58c2a1609c',
  measurementId: 'G-P2SG6WQB2T',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
