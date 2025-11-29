import React from 'react';
import headerImg from '../assets/header image.png'
const Header = () => {
    return (
    <div className="bg-gray-100 mt-10 py-5 px-15 rounded-lg ">
        <div className="hero-content flex-col lg:flex-row">
            <div className='w-2/3'>
            <h1 className="text-4xl font-bold">Books to freshen up your bookshelf</h1>
            
            <button className="btn btn-success mt-5">View The list</button>
            </div>

            {/* Image */} 
            <div className='w-1/3'>
            <img src={headerImg}
            className="w-full "
            />
            </div>
        </div>
    </div>
    );
};

export default Header;