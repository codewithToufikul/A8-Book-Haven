import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const TopRate = () => {
    const [topBook, setTopBook] = useState([]);
    const allBook = useLoaderData();
    useEffect(()=>{
        const allTopBook = allBook.filter((book) => book.rating == '4.9');
    setTopBook(allTopBook);
    },[])
    console.log(topBook);
    
    return (
        <div>
            <div className="flex justify-center p-10">
                <h1 className="text-3xl font-semibold">Top <span className="text-red-400">Rated</span> Books..</h1>
            </div>
            <div>
                {
                    topBook.map(book => )
                }
            </div>
        </div>
    );
};

export default TopRate;