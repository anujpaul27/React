import { useEffect, useState } from "react";
import './style.css'


function ShowPost ({post})
{
    const {title} = post;  
    
    const [visited,setVisited] = useState(false)

    function handleVisited ()
    {
        setVisited(!visited)
    }
    
    return <div className={`btn ${visited? 'back':''}`}>
            <p>{title}</p>
            <button onClick={handleVisited}>{visited? 'Visited':'Not Visit'}</button>

        </div>
}

const Component = () => {

    const [posts, setPost] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=> res.json())
        .then(data=> setPost(data))
    },[])

    return (
        <div > 
            <h2>Hello render system in React</h2>
            <div className="container">
                {
                    posts.map(post=> <ShowPost post ={post} key={post.id}></ShowPost> )
                }
            </div>
        </div>
    );
};

export default Component;