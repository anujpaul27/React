import logo from '../assets/logo1.png'
const Navbar = () => {
    return (
        <div className="w-10/12 flex justify-between my-10 mx-auto">
            <img className='w-15' src={logo} alt="" />         
            <div className="flex gap-10 items-center">
                <p>Home</p>
                <p>Photos</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className='btn btn-secondary'> Coin</button>
            </div>
        </div>
    );
};

export default Navbar;