import { Link } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const githubprovider = new GithubAuthProvider();

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

    const handlegithublogin = () => {
        signInWithPopup(auth, githubprovider)
            .then(result => {
                const Loggedinuser = result.user;
                console.log(Loggedinuser)
                setUser(Loggedinuser);
        })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <button onClick={handleGoogleSignin}>Login here</button>
            <button onClick={handlegithublogin}>Github Login</button>
            <button onClick={handlesignout}>Signout</button>
            <h3>User name is: {user?.displayName}</h3>
            <h3>Users email is: {user?.email}</h3>
            <img src={ user?.photoURL} alt="" />
        </div>
    );
};

export default Login;