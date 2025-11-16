import { useState,useEffect } from "react";
import ShowUser from "./useEffect";

export default function FetchData ()
{
    const [users,setUsers] = useState ([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setUsers(data))
    },[])

    return (
       <div>
            <p>User Length: {users.length}</p>
            {
                users.map(user=> <ShowUser user={user}></ShowUser>)
            }
       </div>
    )
}