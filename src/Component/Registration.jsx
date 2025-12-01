import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../FireBase/firebase_init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
    const [error, setError] = useState('')
    const [success, setSuccessMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [terms,setTerms] = useState(false)

    function handleSubmit (e)
    {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, password);

        // Reset status
        setError('')
        setSuccessMessage ('')

        // Password Validation 
        if (password.length < 6)
        {
            setError('Password give at last six charecter ')
            return;
        }
        if (!/[a-z]/.test(password))
        {
          setError('At least one lower case letter.')
          return
        }
        if (!/[A-Z]/.test(password))
        {
          setError('At least one Upper case letter.')
          return
        }
        if (!/[!@#$%^&*]/.test(password))
        {
          setError('At least One Special Character')
          return;
        }
        if (!/\d/.test(password))
        {
          setError('At last one number')
          return;
        }


        // Check Terms and Condition
        if (!terms)
        {
          setError('Please check mark terms and condition')
          return;
        }


        createUserWithEmailAndPassword(auth,email,password)
        .then(result=> {
            setSuccessMessage('Registration successful',result);
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
            setSuccessMessage('')
        })
    }

    function hanldeShowPassword (params)
    {
      setShowPassword(params)
    }

  return (
    <section className="w-full">
      <div className="w-1/2 mx-auto my-10 ">
        <h1 className="w-1/2 text-center text-3xl py-5">Registration</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset relative">
            {/* <label className="label">Email</label> */}
            <input type="email" className="input" placeholder="Email" name='email' required />
            {/* <label className="label">Password</label> */}
            <input type={showPassword ? 'text' : 'password'} 
            className="input" placeholder="Password" name='password'/>

            
            {/*Adding Password hide show button */}
            <a 
            onClick={()=>hanldeShowPassword(!showPassword)}
            className="btn btn-xs absolute right-50 top-15">
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> }
            </a>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {/* CheckBox for log in  */}
            <div className="flex gap-2 my-2 items-center">
              <input 
              onClick={()=> setTerms(!terms)}
              type="checkbox"  
              className="checkbox" />
              <h1 className="text-lg">Accept Terms and Condition.</h1>
            </div>

            <button className="btn btn-accent w-1/3">Login</button>
          </fieldset>
        </form>


        {
            error && <p className="text-sm text-red-400 mt-5">{error}</p>
        }
        {
            success && <p className="text-sm text-green-400 mx-auto mt-5">{success}</p>
        }
      </div>
    </section>
  );
};

export default Registration;
