
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDTvi6_jBKyDIs_nFELM0VZG28scYLtLvM",
  authDomain: "moviemania-79f05.firebaseapp.com",
  projectId: "moviemania-79f05",
  storageBucket: "moviemania-79f05.appspot.com",
  messagingSenderId: "1003970550105",
  appId: "1:1003970550105:web:6f430073652bf371b95448",
  measurementId: "G-89N7H2ZDBD",
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);