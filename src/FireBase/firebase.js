  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut 
 } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

  import {
    getStorage,
    ref,
    uploadBytes ,
    getDownloadURL
 } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

  import {
    getFirestore,
    collection,
    addDoc,
    getDocs
 } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyComra-Txj4p4gnwWWxaVf7rb6yft38hRk",
    authDomain: "smit-image-gallery.firebaseapp.com",
    projectId: "smit-image-gallery",
    storageBucket: "smit-image-gallery.appspot.com",
    messagingSenderId: "427443159258",
    appId: "1:427443159258:web:aef62f2f41cb4db02ca5e3",
    measurementId: "G-138L5CSDKX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const db = getFirestore(app);



  export{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    auth,
    getStorage,
    ref,
    uploadBytes ,
    getDownloadURL,
    storage,
    getFirestore,
    collection,
    addDoc,
    db,
    getDocs,
    signOut
  }