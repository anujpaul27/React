import { Link, Outlet } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <h3>Navbar</h3>
            <Link to="/header">Header</Link>
            <Link to="/about">About</Link>
            <Link to="/contract">Contract</Link>
            <Outlet> </Outlet>
        </div>
    );
};

export default Navbar;