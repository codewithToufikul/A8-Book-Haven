import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";



export const ListBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setTabIndex(index);
    };


    return (
        <div className="mt-10">
            <div className="py-12 bg-slate-100 flex justify-center items-center rounded-3xl">
                <h1 className="text-4xl font-bold">Explore your read books and wishlist</h1>
            </div>
            
            <div role="tablist" className="tabs w-fit  tabs-lifted tabs-lg mt-7">

                <Link role="tab" className={`tab text-lg${tabIndex === 0 ? ' tab-active' : ''}`} onClick={() => handleTabClick(0)}>Read Books</Link>

                <Link to="wishlist" role="tab" className={`tab text-lg${tabIndex === 1 ? ' tab-active' : ''}`} onClick={() => handleTabClick(1)}>Wishlist Books</Link>

            </div>
            <Outlet ></Outlet>
        </div>
    );
};

export default ListBooks;
