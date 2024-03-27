import { MdOutlineLocationOn, MdPeopleAlt, MdOutlineInsertPageBreak  } from "react-icons/md";
import { Link } from "react-router-dom";

const WishBook = ({book}) => {
    const {
        book_image,
        categories,
        book_name,
        writer_name,
        book_category,
        rating,
        book_id,
        year_of_publishing,
        publisher,
        number_of_pages,
      } = book;

    return (
        <div className="grid lg:grid-cols-8 grid-cols-1 gap-4 border-2 items-center m-2 p-2 rounded-3xl">
            <div className="flex justify-center items-center p-10 m-2 rounded-3xl bg-gray-100 lg:col-span-2">
                <img src={book_image} alt="" />
            </div>
            <div className="w-full space-y-3 lg:col-span-6">
                <h2 className="card-title md:text-2xl">{book_name}</h2>
                <p className="md:text-lg flex-grow">By: {writer_name}</p>
                <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-3">
                    <div className="flex items-center gap-2">
                    <p className="md:text-lg font-bold">Tag:</p>
                    <div className="flex gap-2 md:gap-5">
                        {
                        categories.map(categorie => <p key={categorie.id} className=" text-[#23BE0A] bg-green-50 p-1 md:p-2 rounded-2xl">{categorie}</p>) 
                        }
                    </div>
                    </div>
                    <div className="flex items-center md:ml-5">
                    <MdOutlineLocationOn className="text-xl" />
                    <p className="text-xl"><span className="md:text-xl font-semibold">Year of Publishing: </span>{year_of_publishing}</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 max-w-[800px] border-b-2 pb-5 border-dashed">
                    <div className="flex items-center gap-1">
                        <MdPeopleAlt /> 
                        <p className=" text-xl"><span className="text-xl font-semibold">Publisher:  </span> {publisher}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MdOutlineInsertPageBreak />
                        <p className=" text-xl"><span className="text-xl font-semibold">Page:  </span> {number_of_pages}</p>
                    </div>
                </div>
                <div className="flex gap-6 items-center pt-5">
                    <p className=" text-[#23BE0A] bg-green-50 p-2 rounded-2xl"><span>Category: </span>{book_category}</p>
                    <p className=" text-orange-400 bg-orange-50 p-2 rounded-2xl"><span>Rating: </span>{rating}</p>
                    <Link to={`/book-details/${book_id}`}><button className="btn bg-green-400 text-white rounded-2xl">View Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default WishBook;