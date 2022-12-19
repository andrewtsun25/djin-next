import { initializeApp } from "firebase/app";
import {
  CollectionReference,
  getFirestore,
  collection,
  DocumentData,
} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
import { FirebaseOptions } from "firebase/app";

export const config: FirebaseOptions = {
  apiKey: process.env.FIREBBASE_API_KEY,
  authDomain: "djin-dev.firebaseapp.com",
  projectId: "djin-dev",
  storageBucket: "djin-dev.appspot.com",
  messagingSenderId: "491248123522",
  appId: "1:491248123522:web:f49fcc67aaa94d70787e9b",
  measurementId: "G-3KT3E4JR9B",
};

// Initialize Firebase
const app = initializeApp(config);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export function fsc<T = DocumentData>(
  collectionId: string
): CollectionReference<T> {
  return collection(db, collectionId) as CollectionReference<T>;
}
