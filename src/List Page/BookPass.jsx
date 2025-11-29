import React, { useEffect, useState } from 'react';
import BookList from './BookList';

const BookPass = () => {

    const [bookPass, setBookPass] = useState([])

    useEffect(()=>{
        fetch('book.json')
        .then(res=> res.json())
        .then(data=> setBookPass(data))
    },[])

    return (
        <div>
            {/* header */}
            <section className='w-full font-bold py-3 mx-auto h-15 bg-gray-100 text-3xl rounded-2xl text-center my-5 justify-center'>
            <h1>Books</h1>
            </section>
            
            <div className='w-full flex'>
                <button className='btn btn-success justify-center my-5 mx-auto'>Sor by </button>
            </div>

            {
                bookPass.map(book=> <BookList book={book}></BookList>)
            }
        </div>
    );
};

export default BookPass;