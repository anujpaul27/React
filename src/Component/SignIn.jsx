import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../FireBase/firebase_init";

const SignIn = () => {
    const [successSMS, setSuccessSMS] = useState('')
    const[errorSMS, setErrorSMS] = useState('')
    function handleOnSubmit (e)
    {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);


        // Sign in 
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>
        {
            console.log(res.user),
            setSuccessSMS('Log in Successful')
        }
        )
        .catch(error=>
        {
            console.log(error.message);
            setSuccessSMS('');
            setErrorSMS(error.message);
        }
        )
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form action="" onSubmit={handleOnSubmit}>
              <fieldset className="fieldset">

                <input 
                name='email'
                type="email" 
                className="input" 
                placeholder="Email" />

                <input
                  name='password'
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-accent mt-4">Login</button>
              </fieldset>
            </form>
            {
                errorSMS && <p className="text-red-300">{errorSMS}</p>
            }
            {
                successSMS && <p className="text-green-300">{successSMS}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
