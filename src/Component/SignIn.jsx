import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../FireBase/firebase_init";

const SignIn = () => {
    const [successSMS, setSuccessSMS] = useState('')
    const[errorSMS, setErrorSMS] = useState('')
    const userRef = useRef();

    function handleOnSubmit (e)
    {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Sign in 
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>
        { 
            // Check Email Verification    
            if (res.user.emailVerified)
                setSuccessSMS('Log in Successful');
            else
                setErrorSMS('Please Verify Email Address!.')
                return;                
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

    function forgetPassword ()
    {
        const email=userRef.current.value;
        if (!email)
        {
          setErrorSMS('Please Enter your email of this email section')
          return;
        }

        sendPasswordResetEmail(auth,email)
        .then(()=>{
          setSuccessSMS('Password reset email send.')
        })
        .catch(error=>{
          console.log(error.message);
        })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form action="" onSubmit={handleOnSubmit}>
              <fieldset className="fieldset">
                <input 
                ref={userRef}
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
                  <a  onClick={forgetPassword} className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-accent mt-4">Login</button>
              </fieldset>
            </form>
            {
                errorSMS && <p className="text-red-300 w-full">{errorSMS}</p>
            }
            {
                successSMS && <p className="text-green-300 w-full">{successSMS}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
