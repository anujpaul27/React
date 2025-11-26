import { useLoaderData, useNavigate } from "react-router-dom";


const DetailUser = () => {
    const user = useLoaderData()
    const {username,email,name} =user
    const navigate = useNavigate()

    function handleNavigate ()
    {
        navigate(-1)
    }

    return (
        <div>
            <h2>User: {name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default DetailUser;