// firebase.js
// Substitua os valores abaixo pelas chaves do seu projeto Firebase.
// Para criar o projeto e obter as chaves: https://console.firebase.google.com/



import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB2yRDwffyJLWoD5uyvMdyC9K4OSHqekyA",
  authDomain: "treinaplus-f862d.firebaseapp.com",
  projectId: "treinaplus-f862d",
  storageBucket: "treinaplus-f862d.appspot.com", // ← Corrigido aqui
  messagingSenderId: "372570975207",
  appId: "1:372570975207:web:cc0f4600426fc2fffaeb42"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
