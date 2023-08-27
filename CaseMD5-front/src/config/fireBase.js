import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const app = initializeApp({
    apiKey: "AIzaSyCDdiFR1wAWf81T3OisxlZTwFy5cQcNZ1k",
    authDomain: "md5front-3316d.firebaseapp.com",
    projectId: "md5front-3316d",
    storageBucket: "md5front-3316d.appspot.com",
    messagingSenderId: "933056298313",
    appId: "1:933056298313:web:a8c1cb9f907e75280f6e98",
    measurementId: "G-BV3YF2ST6X"
});


const storage = getStorage(app);
export default storage;