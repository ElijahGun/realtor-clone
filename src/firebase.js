// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc62DgYq41tcwj3lDnMfVGb3GLWNJFSDY",
  authDomain: "realtor-clone-react-8daf2.firebaseapp.com",
  projectId: "realtor-clone-react-8daf2",
  storageBucket: "realtor-clone-react-8daf2.appspot.com",
  messagingSenderId: "498644611475",
  appId: "1:498644611475:web:d565b9388a876ea1ffb866"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();