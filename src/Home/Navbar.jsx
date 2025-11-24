import { Outlet } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <h3>Navbar</h3>
            <a href="/header">Header</a>
            <a href="/about">About</a>
            <a href="/contract">Contract</a>
            <Outlet> </Outlet>
        </div>
    );
};

export default Navbar;