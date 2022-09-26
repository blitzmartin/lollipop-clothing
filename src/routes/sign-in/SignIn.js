import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

export default function SignIn() {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response);
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}