import React, { useRef, useState } from 'react';

const Form = () => {
    
    const refName = useRef()
    const refPassword = useRef()
    function onSubmit (e)
    {
        e.preventDefault()
        console.log(refName.current.value);
        console.log(refPassword.current.value);
    }
    

    return (
        <div className='w-1/3 mx-auto mt-30 '>
            <h1 className='text-3xl mx-auto m-5'>Form</h1>

            <form action="" onSubmit={onSubmit}>
                <input 
                defaultValue={'Anuj'}
                ref={refName} 
                className='border border-gray-500' 
                type="text" 
                name="name" id="" />
                <br />
                <input ref={refPassword} className='border border-gray-500' type="password" name="Password" id="" />
                <br />
                <input type="Submit" value={'Submit'} />
            </form>
        </div>
    );
};

export default Form;