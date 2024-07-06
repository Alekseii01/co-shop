import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCPUC_HtwFklZQ50SCjI3JqM-Nq9vSKVxQ",
    authDomain: "co-shop-8eb2b.firebaseapp.com",
    databaseURL: "https://co-shop-8eb2b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "co-shop-8eb2b",
    storageBucket: "co-shop-8eb2b.appspot.com",
    messagingSenderId: "550775114922",
    appId: "1:550775114922:web:4052dea3d5100e83a154d3",
    measurementId: "G-QE0TNCKPEY"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
