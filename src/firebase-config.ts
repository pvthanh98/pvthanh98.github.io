import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBmUNL7C6fewsPTJaEMq4Qi0_9aTJOCuZw",
    authDomain: "authenticator-8cc5f.firebaseapp.com",
    projectId: "authenticator-8cc5f",
    storageBucket: "authenticator-8cc5f.appspot.com",
    messagingSenderId: "714710453502",
    appId: "1:714710453502:web:4914118833932e421669af",
    measurementId: "G-XJS1CTRL0D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);