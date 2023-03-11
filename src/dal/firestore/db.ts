import { AppOptions, cert, getApps,initializeApp } from "firebase-admin/app";
// See: https://firebase.google.com/docs/web/learn-more#config-object
import { getFirestore } from "firebase-admin/firestore";

const config: AppOptions = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // replace `\n` characters
  }),
  databaseURL: process.env.FIREBASE_DATABASE_NAME,
};

// Initialize Firebase only once, see https://www.reddit.com/r/Firebase/comments/ve4qwl/you_called_initializeapp_more_than_once_issue/
if (getApps().length < 1) {
  // App was not initialized, initialize it...
  initializeApp(config);
}

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();
