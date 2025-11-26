import React from 'react';

const Form = () => {

    function onSubmit (e)
    {
        e.preventDefault()
        console.log(e.target.name.value);
    }

    return (
        <div className='w-1/3 mx-auto mt-30 '>
            <h1 className='text-3xl mx-auto m-5'>Form</h1>
            
            <form action="" onSubmit={onSubmit}>
                <input className='border border-gray-500' type="text" name="name" id="" />
                <br />
                <input className='border border-gray-500' type="password" name="Password" id="" />
                <br />
                <input type="Submit" value={'Submit'} />
            </form>
        </div>
    );
};

export default Form;