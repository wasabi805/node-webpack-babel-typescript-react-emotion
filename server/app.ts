require("dotenv").config();
import express from "express";
import Users from "./src/routes/users";

/* Firebase Configuration  */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) =>
  yes ? getAnalytics(firebase) : null
);

/* Express Configuration  */

const app = express();
const port = 5000;
/* Assets */
app.use(express.static("public"));

/* Routes */
app.use("/users", Users);

app.get("/", (req, res) => {
  res.send("Welcome to the Root Page");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
