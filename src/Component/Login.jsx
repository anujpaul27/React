import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../FireBase/firebase_init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [githubUser, setgithubUser] = useState(null);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error message: ", error);
        setUser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log("Sign Out Success", result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setgithubUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handleSignOut} className="btn btn-success">
          Sign Out
        </button>
      ) : (
        <div>
          <button onClick={handleLogin} className="btn btn-success m-5">
            Login with google
          </button>
          <button onClick={handleGithubSignIn} className="btn btn-success">
            Login with Github
          </button>
        </div>
      )}

      {user && (
        <div>
          <h1>Name: {user.displayName}</h1>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
      {githubUser && (
        <div>
          <h1>Name: {githubUser.displayName}</h1>
          <p>Email: {githubUser.email}</p>
          <img src={githubUser.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
