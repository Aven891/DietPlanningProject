// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFEgkqvX2Egrjq3wH2cvFHF3VTYwsyhB8",
  authDomain: "meal-planner-266ed.firebaseapp.com",
  databaseURL: "https://meal-planner-266ed-default-rtdb.firebaseio.com",
  projectId: "meal-planner-266ed",
  storageBucket: "meal-planner-266ed.firebasestorage.app",
  messagingSenderId: "856744922002",
  appId: "1:856744922002:web:bd4c14a1354078ff86cf4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);  

  