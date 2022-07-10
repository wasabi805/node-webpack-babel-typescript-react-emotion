<!-- ![set up](./server/readMeImages/route-with-param-individ-user.png?raw=true) -->

# Install dotenv

cd into server directory and run

        npm install dotenv --save

read the [docs](https://www.npmjs.com/package/dotenv) on setting up .env file

# Install Firebase

        npm install firebase

## Add Firebase set up to server/app.ts

        // inside server.app.ts

        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        import { getAnalytics, isSupported } from "firebase/analytics";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain:process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID
        };

        // Initialize Firebase
        const firebase = initializeApp(firebaseConfig);

        const analytics = isSupported().then(yes => yes ? getAnalytics(firebase) : null);

for the last line, const analytics ..., use [isSupported](https://stackoverflow.com/a/72167004/7857134)
