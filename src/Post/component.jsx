import { useEffect, useState } from "react";
import './style.css'


function ShowPost ({post,handleMarkVisited})
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
            <br />
            <button onClick={()=>handleMarkVisited(post)}>Mark Visited</button>

        </div>
}

const Component = () => {

    const [posts, setPost] = useState([]);
    const [markVisited, setMarkVisited] = useState([]);  

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=> res.json())
        .then(data=> setPost(data))
    },[]);

    const handleMarkVisited = title =>
    {
        setMarkVisited([...markVisited,title])
    }

    return (
        <div > 
            <h2>Hello render system in React</h2>
            <h4>Visited Country: {markVisited.length}</h4>
            {
                markVisited.map(mark=> <li>{mark.id}</li> )
            }
            <div className="container">
                {
                    posts.map(post=> <ShowPost handleMarkVisited={handleMarkVisited} post ={post} key={post.id}></ShowPost> )
                }
            </div>
        </div>
    );
};

export default Component;