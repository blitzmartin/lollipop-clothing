import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLDPR-cJwUNKKS8PSny32bRChJvx55fg8",
  authDomain: "lollipop-clothing.firebaseapp.com",
  projectId: "lollipop-clothing",
  storageBucket: "lollipop-clothing.appspot.com",
  messagingSenderId: "534444988675",
  appId: "1:534444988675:web:1f1c48a24f2efd7daeb136",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
}
