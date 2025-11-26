import { Link } from "react-router-dom";

const ShowUser = ({user}) => {
    const {id,name} = user
    const CustomSyle = {
        width:'200px',
        border: '2px solid red'
    }
    return (
        
        <div>
            <p className="text-3xl">ID: {id} And This Name is {name}</p>
            <Link to={`/${id}`}>See details</Link>
        </div>
    );
};

export default ShowUser;