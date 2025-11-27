import React, { useRef } from 'react';

const Form = ({heading, btnText, information, children}) => {
    
    const refName = useRef()
    const refPassword = useRef()
    function onSubmit (e)
    {
        e.preventDefault()
        const name = refName.current.value;
        const password = refPassword.current.value;

        information({name:name, password:password})
    }
    

    return (
        <div className='w-1/3 mx-auto mt-10 '>
            {/* <h1 className='text-3xl mx-auto m-5'>{heading}</h1> */}
            {children}
            <form action="" onSubmit={onSubmit}>
                
                <input                 
                ref={refName} 
                className='border border-gray-500' 
                type="text" 
                name="name" id="" />
                <br />
                <input ref={refPassword} className='border border-gray-500' type="password" name="Password" id="" />
                <br />
                <input type="Submit" value={btnText} />
            </form>
        </div>
    );
};

export default Form;