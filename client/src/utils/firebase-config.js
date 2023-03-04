
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDXR44kLcqbmcAH2DHHbQaTpYSCw7HAaY",
  authDomain: "netflix-clone-c7f32.firebaseapp.com",
  projectId: "netflix-clone-c7f32",
  storageBucket: "netflix-clone-c7f32.appspot.com",
  messagingSenderId: "195344542888",
  appId: "1:195344542888:web:4cd17ac8a4a3946814a69d",
  measurementId: "G-BEVRV6W6HN"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);