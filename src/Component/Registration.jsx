import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import auth from "../FireBase/firebase_init";

const Registration = () => {

    function handleSubmit (e)
    {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, password);

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=> {
            console.log('Registration successful');
        })
        .catch(error=>{
            console.log(error);
        })
    }

  return (
    <section className="w-full">
      <div className="w-1/2 mx-auto my-10 ">
        <h1 className="w-1/2 text-center text-3xl py-5">Registration</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            {/* <label className="label">Email</label> */}
            <input type="email" className="input" placeholder="Email" name='email' />
            {/* <label className="label">Password</label> */}
            <input type="password" className="input" placeholder="Password" name='password'/>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-accent w-1/3">Login</button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Registration;
