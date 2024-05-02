import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBP-dVa6FOh95hQUxRhGJaNvDa8Z-A6KEM',
  authDomain: 'shoping-cart-aa94c.firebaseapp.com',
  projectId: 'shoping-cart-aa94c',
  storageBucket: 'shoping-cart-aa94c.appspot.com',
  messagingSenderId: '920184593335',
  appId: '1:920184593335:web:76e0a70c8685be796e2632',
  measurementId: 'G-Z815D3J49G',
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
// Obtener el objeto de autenticación
// eslint-disable-next-line no-unused-vars
export const authFirebase = getAuth(app);
