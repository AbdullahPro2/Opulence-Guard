import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD35eDfuLb1Nl3X-G13_1-NBrDTPInWIag',
  authDomain: 'envoye-avec-nous.firebaseapp.com',
  projectId: 'envoye-avec-nous',
  storageBucket: 'envoye-avec-nous.appspot.com',
  messagingSenderId: '1068013526137',
  appId: '1:1068013526137:web:eba4ff6405b560968048a8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
