import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser);
            })
            .catch(error => {
            console.log('error', error.message)
        })
    }

    const handlesignout = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <button onClick={handleGoogleSignin}>Login here</button>
            <button onClick={handlesignout}>Signout</button>
            <h3>User name is: {user?.displayName}</h3>
            <h3>Users email is: {user?.email}</h3>
            <img src={ user?.photoURL} alt="" />
        </div>
    );
};

export default Login;