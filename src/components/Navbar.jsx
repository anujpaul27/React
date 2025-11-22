import { useState } from 'react';
import logo from '../assets/logo.png'
import Header from './Header';
import DollarIcon from '../assets/dollar.png'
const Navbar = () => {
    const [coin,setCoin] = useState(0)

    function handleCoin ()
    {
        setCoin(coin+100)
    }

    return (
        <section>
            <div className="w-10/12 flex justify-between my-10 mx-auto">
            <img className='w-15' src={logo} alt="" />         
            <div className="flex gap-10 items-center">
                <p>Home</p>
                <p>Photos</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className='btn btn-secondary'>
                    <img className='w-5' src={DollarIcon} alt="" />
                      {coin} Cr</button>
            </div>
        </div>
        <Header handleCoin={handleCoin}></Header>

        </section>
        
    );
};

export default Navbar;