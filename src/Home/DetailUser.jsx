import { useLoaderData } from "react-router-dom";


const DetailUser = () => {
    const user = useLoaderData()
    const {username,email,name} =user
    return (
        <div>
            <h2>User: {name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    );
};

export default DetailUser;