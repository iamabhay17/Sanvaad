
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUwIPAPlq3of6tYhXA2DzcS9ZN09fbwWg",
  authDomain: "chat-c3c21.firebaseapp.com",
  projectId: "chat-c3c21",
  storageBucket: "chat-c3c21.appspot.com",
  messagingSenderId: "856909879657",
  appId: "1:856909879657:web:8652d197317938cc4a85f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
