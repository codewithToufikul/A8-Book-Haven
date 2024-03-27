import Banner from "../Component/Banner/Banner";
import { useEffect, useState } from "react";
import Book from "../Component/Book/Book";



const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('./bookData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    
    return (
        <div>
            <Banner></Banner>
            <div className="mt-24">
            <div className="text-center">
                <h1 className="text-5xl font-semibold">Books</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-2 md:mx-0 md:my-0 my-3 gap-5 mt-7">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
            </div>
        </div>
        
    );
};

export default Home;