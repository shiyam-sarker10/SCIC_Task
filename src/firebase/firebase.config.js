import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiGVtFYhnqiA2frgltvyOeS38C9lfMUCs",
  authDomain: "taskiee-d38fb.firebaseapp.com",
  projectId: "taskiee-d38fb",
  storageBucket: "taskiee-d38fb.appspot.com",
  messagingSenderId: "750475138214",
  appId: "1:750475138214:web:a82526c433cf3db9391067",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
