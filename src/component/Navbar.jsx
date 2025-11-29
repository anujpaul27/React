import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
    <div className="  navbar">
        <div className="navbar-start">
            <a className="text-xl font-bold ">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
            <li> <Link to='/'>Home</Link> </li>
           
            <li> <Link to='/ListBook'> Listed Book</Link> </li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
    </div>
    );
};

export default Navbar;