// File: lib/firebase.ts
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCTlX-Sh2lmeQsGPo_KXasEJNcYwtQMpRo",
  authDomain: "koinbx-task.firebaseapp.com",
  projectId: "koinbx-task",
  databaseURL: 'https://koinbx-task-default-rtdb.firebaseio.com/',
  storageBucket: "koinbx-task.firebasestorage.app",
  messagingSenderId: "198482686167",
  appId: "1:198482686167:web:2d422bc43a927a5dbe8092",
  measurementId: "G-00WSJ17Y3V"
};

// Initialize Firebase only if it hasn't been initialized yet
const app =  initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };