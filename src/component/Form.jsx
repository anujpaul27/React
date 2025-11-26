import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState(null)
    const [password,setPassword] = useState(null)

    function onSubmit (e)
    {
        e.preventDefault()
        // console.log(e.target.name.value);
        console.log(name, password);
    }
    
    function handleName (e)
    {
        // console.log(e.target.value);
        setName(e.target.value)
    }

    function handlePassword (e)
    {
        // console.log(e.target.value);
        setPassword(e.target.value)
    }

    return (
        <div className='w-1/3 mx-auto mt-30 '>
            <h1 className='text-3xl mx-auto m-5'>Form</h1>

            <form action="" onSubmit={onSubmit}>
                <input onChange={handleName} className='border border-gray-500' type="text" name="name" id="" />
                <br />
                <input onChange={handlePassword} className='border border-gray-500' type="password" name="Password" id="" />
                <br />
                <input type="Submit" value={'Submit'} />
            </form>
        </div>
    );
};

export default Form;