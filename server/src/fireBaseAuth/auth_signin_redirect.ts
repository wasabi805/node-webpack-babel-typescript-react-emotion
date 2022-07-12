import { getAuth, getRedirectResult, GoogleAuthProvider  } from "@firebase/auth";

const auth = getAuth();
getRedirectResult(auth).then((result)=>{
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user

}).catch((error)=>{
    const errorCode = error.code 
    const errorMessage = error.message

    const email = error.customData.email
    const credential = GoogleAuthProvider.credentialFromError(error)
})