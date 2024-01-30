import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx3XU6uM5xEhMgjtMFlG-6cWkEwaGuO1E",
  authDomain: "minu1215-hello-vue.firebaseapp.com",
  projectId: "minu1215-hello-vue",
  storageBucket: "minu1215-hello-vue.appspot.com",
  messagingSenderId: "480376700627",
  appId: "1:480376700627:web:ee0b23a2aedf984be11e26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
