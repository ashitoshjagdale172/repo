import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between gap-10 mx-auto p-4">
        <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap">Ashitosh Jagdale</span>
        <div className="flex md:order-2">
          <button className='md:hidden' onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`absolute top-16 mr-10 right-1 w-1/3 bg-transparent md:static md:flex md:w-auto md:order-1 ${menuOpen ? 'flex' : 'hidden'}`}>
          <ul className="text-2xl flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 underline hover:underline-offset-8 md:hover:bg-transparent md:hover:text-gray-600 md:p-0">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 underline hover:underline-offset-8 md:hover:bg-transparent md:hover:text-gray-600 md:p-0">Experience</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 underline hover:underline-offset-8 md:hover:bg-transparent md:hover:text-gray-600 md:p-0">Projects</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 underline hover:underline-offset-8 md:hover:bg-transparent md:hover:text-gray-600 md:p-0">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
