import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getStorage,
  connectStorageEmulator,
  ref,
  getDownloadURL,
} from "firebase/storage";
import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCODm9AjAA1_HfYnB6d-K8XB6dJqsfpX0",
  authDomain: "jf-sabinov.firebaseapp.com",
  projectId: "jf-sabinov",
  storageBucket: "jf-sabinov.appspot.com",
  messagingSenderId: "934762500891",
  appId: "1:934762500891:web:8c2827b0c1c281a91939be",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const functions = getFunctions(app);
// eslint-disable-next-line no-restricted-globals
if (location.hostname === "localhost") {
  /* eslint-disable-next-line no-restricted-globals */
 // self.FIREBASE_APPCHECK_DEBUG_TOKEN =process.env.REACT_APP_FIREBASE_RECAPTCHA_DEBUG;
  connectFunctionsEmulator(functions, "localhost", 5001);
  connectStorageEmulator(storage, "localhost", 9199);
}

export const sendEmail = httpsCallable(functions, "sendEmail");
/**************************************************************************************
 **************************************************************************************
 *********************SIGNING IN AND CREATING NEW PROFILE(WORKER)**********************
 **************************************************************************************
 *************************************************************************************/

export const getImage = async (imgName) => {
  const imgURL = ref(storage, imgName);
  return getDownloadURL(imgURL);
};
