import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = ({ handleBookMarks }) => {
    const [books, setBooks] = useState([]);

    //fetch the data
    useEffect(() => {
        fetch('../books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {books.map(item => {
                return (
                    <Book handleBookMarks={handleBookMarks} book={item} key={Math.random()} />
                )
            })}
        </div>
    )
}

export default Books
