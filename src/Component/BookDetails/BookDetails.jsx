import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams()
    const parsIntId = parseInt(id);

    const book = books.find(book => book.book_id === parsIntId);
    console.log(book);

    const {book_image, categories, book_name, writer_name, book_category, rating, review, number_of_pages, publisher, year_of_publishing} = book;

    return (
        <div>
            <div>
                <img src={book_image} alt="" />
            </div>
            <div>
                <h1 className="text-4xl font-bold">{book_name}</h1>
                <h2 className="text-xl font-medium border-b-2 pb-4">By: {writer_name}</h2>
                <p className="text-lg font-normal py-4 border-b-2">{book_category}</p>
                <p><span className="text-lg font-semibold">Reviews: </span> {review}</p>
                <div className="flex gap-5 items-center">
                <h3 className="text-lg font-semibold">Tag</h3>
                <div className="flex gap-5">
                {
                   categories.map(categorie => <p key={categorie.id} className=" text-[#23BE0A] bg-green-50 p-2 rounded-2xl">{categorie}</p>) 
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;