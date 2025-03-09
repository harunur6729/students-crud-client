import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {

  const links = [
    <Link key="home" to="/"><li>Home</li></Link>,
    <Link key="add-student" to="/studentForm"><li>Add Students</li></Link>,
    <Link key="all-students" to="/allStudents"><li>All Students</li></Link>
];

    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><FaHome></FaHome> IGS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-8 menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    );
};

export default Header;