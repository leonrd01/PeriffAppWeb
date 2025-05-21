// importe do FirebaseApp 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// importe do FirebaseAnalytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// importe do FirebaseAuth
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
// importe do Firestore 
import { initializeFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc, deleteDoc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRD_qENa8o4HkeOBED50CLCxWvvVZfUNA",
  authDomain: "periff-app.firebaseapp.com",
  projectId: "periff-app",
  storageBucket: "periff-app.firebasestorage.app",
  messagingSenderId: "455048533449",
  appId: "1:455048533449:web:084953a178214cf1c04418",
  measurementId: "G-5QE8HQS97D"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firebase Analytics
const analytics = getAnalytics(app);

// **Inicializa o Firestore com long‑polling forçado**
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});

// Inicializa o Firebase Authentication
const auth = getAuth(app);

// exporta os serviços do Firebase para serem usados em outros arquivos
export { auth, db, collection, addDoc, signInWithEmailAndPassword, onAuthStateChanged, signOut, setDoc, doc, getDocs, getDoc, deleteDoc, updateDoc, query, where };
