
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvuMjy2tSa6TXGyw6YfBcTLuv8KBEoPM8",
  authDomain: "netflixgpt-ca5db.firebaseapp.com",
  projectId: "netflixgpt-ca5db",
  storageBucket: "netflixgpt-ca5db.appspot.com",
  messagingSenderId: "714544520238",
  appId: "1:714544520238:web:98bc1d07231fface3453bf",
  measurementId: "G-G34Y0RJ2WG",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();