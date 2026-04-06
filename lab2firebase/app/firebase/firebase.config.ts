import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNQtddrNrHL_U9qBYhzp5Giayu0L4HjTU",
  authDomain: "crud-firebase-99fd6.firebaseapp.com",
  projectId: "crud-firebase-99fd6",
  storageBucket: "crud-firebase-99fd6.firebasestorage.app",
  messagingSenderId: "270383598769",
  appId: "1:270383598769:web:bc0f646b806446c878e690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };