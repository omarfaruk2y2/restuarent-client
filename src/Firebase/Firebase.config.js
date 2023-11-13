// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCItPuELWv0Hr-FayzEjUTxBJueG7EdvgY",
  authDomain: "restuarent-auth.firebaseapp.com",
  projectId: "restuarent-auth",
  storageBucket: "restuarent-auth.appspot.com",
  messagingSenderId: "814589749864",
  appId: "1:814589749864:web:bd1f3e1676638396a8a9dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;