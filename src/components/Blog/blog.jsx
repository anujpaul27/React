import { useEffect, useState } from "react";
import ShowBlog from "./ShowBlog";
import ShowCollaps from "./ShowCollaps";

const Blog = () => {

    const [blogPost, setBlogPost]  = useState([])
    const [bookmark,setBookmark] = useState([])
    const [time, setTime] = useState(0)

    useEffect (()=>{
        fetch('BlogPost.json')
        .then(res=> res.json())
        .then(data=> setBlogPost(data))
    },[])

    function handleBookmark (blog)
    {
        const {reading_time} =blog;
        setBookmark([...bookmark,blog])
        setTime(time + reading_time);  
        
    }

    function handleMakeRead (id)
    {
        const remainingBookMark  = bookmark.map(bookmark=> bookmark.id != id)
        setBookmark(remainingBookMark)
    }

    return (
<body className="flex bg-gray-800">
    <section className="w-10/12 flex mx-auto lg:mt-20 sm:mt-10">
        <div className="grid grid-cols-1 gap-2 w-6/10 mx-auto  ">
        {
            blogPost.map((post,inx)=> <ShowBlog key={inx} postObj={post} handleMakeRead={handleMakeRead} handleBookmark={handleBookmark}></ShowBlog>)
        }
        </div>

        <div className="w-3/10 mt-5 ">
            <div className="bg-pink-500 w-full text-xl py-2 rounded-sm">
                <h1 className="text-xl font-bold text-center">List of the BookMark</h1>
                <p className="text-sm text-center ">Spend time {time} minute</p>
            </div>
            {
                bookmark.map(blog=><ShowCollaps blog={blog}></ShowCollaps>)
            }
        </div>
    </section>
</body>
    );
};

export default Blog;