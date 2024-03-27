import {useEffect, useState } from "react";
import ReadedBook from "../ReadedBook/ReadedBook";


const ReadBook = () => {
    const [readedBook, setReadedBook] = useState([]);
    const [sortBook, setSortBook] = useState([]);

    const handleSort = sort =>{
        if(sort === 'all'){
            setSortBook(readedBook);
        }
        else if(sort === 'rating'){
            const sortRating = [...readedBook].sort((a, b) => b.rating - a.rating);
            setSortBook(sortRating);
            
        }
        else if(sort === 'page'){
            const sortRating = [...readedBook].sort((a, b) => b.number_of_pages - a.number_of_pages);
            setSortBook(sortRating);
        }
        else if(sort === 'year'){
            const sortRating = [...readedBook].sort((a, b) => b.year_of_publishing - a.year_of_publishing);
            setSortBook(sortRating);
        }
    }
    useEffect(()=>{
        const readBookData = JSON.parse(localStorage.getItem("books"))
        || [];
        setReadedBook(readBookData);
        setSortBook(readBookData);
    },[]);

    return (
        
        <div>
            <div className="flex justify-center">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleSort('all')}><a>All</a></li>
                    <li onClick={()=>handleSort('rating')}><a>Rating</a></li>
                    <li onClick={()=>handleSort('page')}><a>Number of pages</a></li>
                    <li onClick={()=>handleSort('year')}><a>Publisher year</a></li>
                </ul>
                </div>
            </div>
            <div>
            {
                sortBook.map(book => <ReadedBook key={book.book_id} book={book}></ReadedBook>)
            }
        </div>
        </div>
    );
};

export default ReadBook;