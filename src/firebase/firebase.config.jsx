// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtu_Sugp094XgLf9NufxJuGreYoTv48So",
  authDomain: "task-planner-tushar.firebaseapp.com",
  projectId: "task-planner-tushar",
  storageBucket: "task-planner-tushar.appspot.com",
  messagingSenderId: "448717553503",
  appId: "1:448717553503:web:3fd4abc80b13f30cedc0ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;