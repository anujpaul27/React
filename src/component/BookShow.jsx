import React from 'react';

const BookShow = ({book}) => {
    console.log(book);
    
    return (
    <div className="card w-65 shadow-sm my-5">
        <div>
            <figure className="px-5 pt-5">
            <img
            src={book.cover_image}
            alt="Book"
            className="rounded-xl w-30 h-40 bg-gray-100 " />
        </figure>
        </div>
        <div className="card-body items-start text-left ">
            <div className='flex gap-3 '>
                <button className=' bg-gray-200 rounded-sm text-blue-600 py-1 px-1'>{book.book_type}</button>
                <button className='w-10 bg-gray-200 rounded-sm text-blue-600 py-1 px-1' >{book.identity}</button>
            </div>
            <h2 className="card-title">{book.title}</h2>
            <p>by {book.author}</p>
             <div className="divider divider-accent my-0"></div>
            <div className='flex justify-around'>
                <p>Rating </p>    
                <p>{book.rating}</p>    
            </div>            
            
        </div>
    </div>
    );
};

export default BookShow;