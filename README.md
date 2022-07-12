<!-- ![set up](./server/readMeImages/route-with-param-individ-user.png?raw=true) -->

# Firebase Auth

See [docs](https://firebase.google.com/docs/auth/where-to-start) to figure out which authe service library you'd like to use in your app under the section

        See the Firebase Authentication SDK docs:

For this example, we'll use [Google](https://firebase.google.com/docs/auth/web/google-signin#handle_the_sign-in_flow_with_the_firebase_sdk)

# Installation

        npm i @firebase/auth

# Create an Instance of the Auth Provider

create auth_google_provider_create.tsx file file in src/firebaseAuth and add the following:

        import { GoogleAuthProvider } from "firebase/auth";

        const provider = new GoogleAuthProvider();

(optional)
add scope for OAuth 2.0

        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

# Credentials | Redirect to Login Page

We're going with the reirecting to a login page method since it's what Firebase docs recommends for mobile.

create this file : src/fireBase/auth_signin_redirect.tsx
Then inside this file, we'll redirect with one call.

        // inside src/fireBase/auth_signin_redirect.tsx

        import { getAuth, signInWithRedirect } from "firebase/auth";

        const auth = getAuth();
        signInWithRedirect(auth, provider);

# Get the Google provider's OAuth token

create this file : src/fireBase/auth_google_redirect_results.js

we'll need three things:

- getAuth : we need this to create an auth instance.
- getRedirectResult : the library method gives access to the access token
- GoogleAuthProvider: the auth credential type that was used

Below is what's in the [docs](https://firebase.google.com/docs/auth/web/google-signin#web-version-9_1)

- step 1.) Create Auth instance and use the getRedirectResult method

        // inside src/fireBase/auth_google_redirect_results.js
        import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

        const auth = getAuth();

        // pass in auth to getRedirectResult and set up the promise
        getRedirectResult( auth ).then((result)=>{
        }).catch((error)=>{

        });

what getRedirectResult allows you to do is:

> Then, you can also retrieve the Google provider's OAuth token by calling **getRedirectResult** when your page loads:

- step 2.) Create the access token and Assign to User

          // inside src/fireBase/auth_google_redirect_results.js
        import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

        const auth = getAuth();

        getRedirectResult( auth ).then((result)=>{

                // Get the access token
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // create a variable user containing the signed in user.
                const user = result.user;

        }).catch((error)=>{

        });

- step 3.) Handle errors

           // inside src/fireBase/auth_google_redirect_results.js
        import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

        const auth = getAuth();

        getRedirectResult( auth ).then((result)=>{
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

        }).catch((error)=>{

                // handle the errors
                const errorCode = error.code;
                const errorMessage = error.message;

                // give back the email user submited that triggered the error
                const email = error.customData.email;

                 // The AuthCredential type that was used.
                 const credential = GoogleAuthProvider.credentialFromError(error);

        });
