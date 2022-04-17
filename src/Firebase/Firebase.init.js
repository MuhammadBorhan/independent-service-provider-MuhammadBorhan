import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAzcMzkwh2Al_Vepw9Z9uiaKCFXZ_SCkfs",
    authDomain: "home-tutor-authentication.firebaseapp.com",
    projectId: "home-tutor-authentication",
    storageBucket: "home-tutor-authentication.appspot.com",
    messagingSenderId: "953133117083",
    appId: "1:953133117083:web:ac9ddbafa496dcc616603e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;