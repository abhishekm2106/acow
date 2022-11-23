import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import 'firebase/firestore';
// import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCHEQAwZOQqz37URC6M9tqrFwFEAwMBUZk",
    authDomain: "acko-qa.firebaseapp.com",
    projectId: "acko-qa",
    storageBucket: "acko-qa.appspot.com",
    messagingSenderId: "46797309269",
    appId: "1:46797309269:web:f4fde8ec7267ca20831bdc",
    measurementId: "G-PSBYMZM0JQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore()


const addUserToFirestore = (user) => {

    db.collection('users').doc(user.uid).set({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL
    })
}



var provider = new GoogleAuthProvider()
export const signInWithGoogle = () => signInWithPopup(auth, provider)
    .catch((error) => alert(error.message))


export const signUpWithEmail = (email, password, name) => createUserWithEmailAndPassword(email, password)
    .then(
        authenticate => {
            authenticate.user.updateProfile({
                displayName: name
            })
                .then(() => addUserToFirestore(authenticate.user))
        }
    )
    .catch(error => {
        alert(error.message)
    })


export default db