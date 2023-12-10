import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import environment_variable from "./env";

const firebaseConfig = {
  apiKey: environment_variable.API_KEY,
  authDomain: environment_variable.AUTH_DOMAIN,
  projectId: environment_variable.PROJECT_ID,
  storageBucket: environment_variable.STORAGE_BUCKET,
  messagingSenderId: environment_variable.MESSAGING_SENDER_ID,
  appId: environment_variable.APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)