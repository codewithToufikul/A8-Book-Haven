import { useEffect, useState } from "react";
import ReadedBook from "../ReadedBook/ReadedBook";


const ReadBook = () => {
    const [readedBook, setReadedBook] = useState([]);
    useEffect(()=>{
        const readBookData = JSON.parse(localStorage.getItem("books"))
        || [];
        setReadedBook(readBookData);
    },[])

    return (
        <div>
            {
                readedBook.map(book => <ReadedBook key={book.book_id} book={book}></ReadedBook>)
            }
        </div>
    );
};

export default ReadBook;