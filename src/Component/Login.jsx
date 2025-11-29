import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../FireBase/firebase_init";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleLogin = ()=>
    {
        signInWithPopup(auth,provider)
        .then(result=> {
            console.log(result);
        })
        .catch(error =>{
            console.log('Error',error);
        })
    }

    return (
        <div>
            <button onClick={handleLogin} className='btn btn-success'>Login with google</button>
        </div>
    );
};

export default Login;