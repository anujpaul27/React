import { useLoaderData } from "react-router-dom";
import ShowUser from "./ShowUser";

const Header = () => {
    const users = useLoaderData()
    return (
        <div>
            <h1>Users: {users.length}  </h1>   
            {
                users.map(user=> <ShowUser key={user.id} user={user}></ShowUser>)
            }         
        </div>
    );
};

export default Header;