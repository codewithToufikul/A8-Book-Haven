import {NavLink } from "react-router-dom";




const Navbar = () => {
  return (
    <div className="z-10 sticky top-0 bg-white w-full h-16 shadow-lg">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-normal"
            >
             <NavLink to="/" className={({isActive}) => isActive ? 'text-green-400 font-bold border-2 border-green-300 p-1 rounded-xl': ''}>Home</NavLink>
          <NavLink to="/listed-book" className={({isActive}) => isActive ? 'text-green-400 font-bold border-2 border-green-300 p-1 rounded-xl': ''}>Listed Books</NavLink>
          <NavLink to="/pages-to-read" className={({isActive}) => isActive ? 'text-green-400 font-bold border-2 border-green-300 p-1 rounded-xl': ''}>Pages to Read</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-normal gap-5 items-center">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-green-400 font-bold border-2 border-green-300 p-1 rounded-xl': ''}>Home</NavLink>
          <NavLink to="/listed-book" className={({isActive}) => isActive ? 'text-green-400 font-bold border-2 border-green-300 p-1 rounded-xl': ''}>Listed Books</NavLink>
          <NavLink to="/pages-to-read" className={({isActive}) => isActive ? 'text-green-400 font-bold border-2 border-green-300 p-1 rounded-xl': ''}>Pages to Read</NavLink>
          
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn bg-[#23BE0A] text-white text-lg">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white text-lg">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
