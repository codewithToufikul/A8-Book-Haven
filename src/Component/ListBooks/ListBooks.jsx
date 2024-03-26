import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const ListBooks = () => {
    return (
        <div className="mt-10">
            <div className=" py-12 bg-slate-100 flex justify-center items-center rounded-3xl">
                <h1 className="text-4xl font-bold">Books</h1>
            </div>
            <div className="flex justify-center mt-8">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 text-xl text-white bg-green-400">Sort By <IoIosArrowDown /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                </div>
            </div>
            <div role="tablist" className="tabs w-fit  tabs-lifted tabs-lg">
            <Link to="/read" role="tab" className="tab text-lg">Read Books</Link>
            <Link to="/wishlist" role="tab" className="tab tab-active text-lg">Wishlist Books</Link>
            </div>
        </div>
    );
};

export default ListBooks;