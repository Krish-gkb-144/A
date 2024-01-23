
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxr597d_tUNurHDl4EtxZTBfqyih9nXLo",
  authDomain: "task-69a19.firebaseapp.com",
  projectId: "task-69a19",
  storageBucket: "task-69a19.appspot.com",
  messagingSenderId: "106549683984",
  appId: "1:106549683984:web:373eb82732247c3f7be795"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app);
export default app;