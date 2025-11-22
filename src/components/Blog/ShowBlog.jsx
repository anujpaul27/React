
const ShowBlog = ({postObj,handleBookmark,handleMakeRead}) => {
    const{title,cover,author_img,author_name,posted_date} =postObj
    return (
    <div className="card bg-base-100 w-full shadow-sm mt-5">
        <figure>
            <img
            src={cover}
            alt="Post Cover " />
        </figure>
        <div className=" mx-2 my-2">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img className="w-10 h-10 object-cover rounded-full" src={author_img} alt="" /> 
                    <div>
                        <p className="text-sm">{author_name}</p>
                        <p className="text-[10px]">{posted_date}</p>
                    </div>
                </div>

                <div className="flex">
                    <p className="text-sm">Add to Bookmark </p>
                    <svg onClick={()=>handleBookmark(postObj)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </div>             
            </div>            
            <h2 className="text-xl font-bold">{title}</h2>
            
            <div className="flex justify-center">
                <button onClick={()=>handleMakeRead(postObj.id)} className="btn btn-primary my-5 ">Read More</button>
            </div>
            
        </div>
    </div>
    );
};

export default ShowBlog;