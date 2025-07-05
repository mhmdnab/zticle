// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBvm9LTORFBnViKPidVGwNV8pxuTYWQtc",
  authDomain: "zticle-genzarticles.firebaseapp.com",
  databaseURL: "https://zticle-genzarticles-default-rtdb.firebaseio.com",
  projectId: "zticle-genzarticles",
  storageBucket: "zticle-genzarticles.appspot.com", // fixed .app typo
  messagingSenderId: "634706840905",
  appId: "1:634706840905:web:695a8b01659303fea29e98",
  measurementId: "G-5N9C41RHFT",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
