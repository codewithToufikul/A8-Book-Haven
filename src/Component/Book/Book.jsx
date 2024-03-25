import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    book_image,
    categories,
    book_name,
    writer_name,
    book_category,
    rating,
    book_id,
  } = book;
  return (
    <div>
      <Link to={`/book-details/${book_id}`}>
      <div className="card border-2 cursor-pointer">
        <figure className="pt-3 px-3">
          <div className="bg-[#F3F3F3] w-full py-5 rounded-3xl flex justify-center">
          <img
            src={book_image}
            alt="Shoes"
            className="rounded-xl"
          />
          </div>
        </figure>
        <div className="flex flex-col m-5 space-y-3">
            <div className="flex gap-5">
                {
                   categories.map(categorie => <p key={categorie.id} className=" text-[#23BE0A] bg-green-50 p-2 rounded-2xl">{categorie}</p>) 
                }
            </div>
          <h2 className="card-title text-2xl">{book_name}</h2>
          <p className="text-lg flex-grow">By: {writer_name}</p>
          <div className="card-actions justify-between border-dashed border-t-2 pt-3">
            <p className="text-base">{book_category}</p>
            <p className="flex items-center gap-2 text-lg">{rating} <IoStarOutline /></p>
            <p></p>
          </div>
        </div>
      </div></Link>
    </div>
  );
};

export default Book;
