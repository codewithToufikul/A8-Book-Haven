import { IoStarOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks, wishBooks } from "../../Utility/LocalStorage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const parsIntId = parseInt(id);

  const book = books.find((book) => book.book_id === parsIntId);
  console.log(book);

  const handleBookRead = ()=>{
    saveBooks(book);
  };

  const handleAddWishlist =()=>{
    wishBooks(book);
  }
  

  const {
    book_image,
    categories,
    book_name,
    writer_name,
    book_category,
    rating,
    review,
    number_of_pages,
    publisher,
    year_of_publishing,
    book_id
  } = book;

 

  return (
    <div className="grid gap-10 grid-cols-2 mt-10">
      <div className="flex w-[570px] h-[700px] justify-center items-center bg-[#1313130D] m-2 rounded-3xl">
        <img className="w-3/5" src={book_image} alt="" />
      </div>
      <div className="space-y-4 m-3">
        <h1 className="text-4xl font-bold">{book_name}</h1>
        <h2 className="text-xl font-medium border-b-2 pb-4">
          By: {writer_name}
        </h2>
        <p className="text-lg font-normal py-4 border-b-2">{book_category}</p>
        <p>
          <span className="text-lg font-semibold">Reviews: </span> {review}
        </p>
        <div className="flex gap-5 items-center border-b-2 pb-5">
          <h3 className="text-lg font-semibold">Tag</h3>
          <div className="flex gap-5">
            {categories.map((categorie) => (
              <p
                key={categorie.id}
                className=" text-[#23BE0A] bg-green-50 p-2 rounded-2xl"
              >
                {categorie}
              </p>
            ))}
          </div>
        </div>
        <div className="w-[350px] mt-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Number of Pages:</td>
                  <th>{number_of_pages}</th>
                </tr>
                <tr>
                  <td>Publisher:</td>
                  <th>{publisher}</th>
                </tr>
                <tr>
                  <td>Year of Publishing:</td>
                  <th>{year_of_publishing}</th>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <th className="flex items-center gap-2 text-lg">{rating} <IoStarOutline /></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="gap-4 flex">
          <a onClick={handleBookRead} className="btn bg-white text-lg">Read</a>
          <a onClick={handleAddWishlist} className="btn bg-[#59C6D2] text-white text-lg">Wishlist</a>
          </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
