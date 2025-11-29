import React, { useEffect, useState } from 'react';
import BookShow from './BookShow';

const Book = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
        fetch('book.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])

    return (
        <div className='grid grid-cols-3 place-items-center'>
            {
                books.map(book=> <BookShow book={book}>  </BookShow>)
            }
        </div>
    );
};

export default Book;