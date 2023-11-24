// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey ,
  authDomain:import.meta.env.VITE_authDomain ,
  projectId:import.meta.env.VITE_projectId ,
  storageBucket:import.meta.env.VITE_storageBucket ,
  messagingSenderId:import.meta.env.VITE_messagingSenderId ,
  appId:import.meta.env.VITE_appId 
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAAnvD4BRo0tCCJ96n0ZAPcmx2H2LaRbls",
//   authDomain: "survey-world-c05ff.firebaseapp.com",
//   projectId: "survey-world-c05ff",
//   storageBucket: "survey-world-c05ff.appspot.com",
//   messagingSenderId: "235736172618",
//   appId: "1:235736172618:web:3d6f1cd40ecf92e9d9feb3"
// };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app
  