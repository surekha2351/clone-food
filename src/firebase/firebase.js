
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbf0tGa0bfPrDdDV58Yufn8eNLnMtJ0_U",
  authDomain: "firelogin-bcebc.firebaseapp.com",
  projectId: "firelogin-bcebc",
  storageBucket: "firelogin-bcebc.appspot.com",
  messagingSenderId: "526303621842",
  appId: "1:526303621842:web:0e42598a5dfbc4f84cf30b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

