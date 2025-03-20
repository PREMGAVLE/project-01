import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../Pages/Login';

function Navbar({ onAbouteClick, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openpop, setOpenpop] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black shadow-xl">
      <div className="flex items-center bg-white justify-between z-50 p-4 md:px-8">
        <Link to={'/'} className="flex items-center space-x-3">
          <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/logo/Logo.svg" className="h-15" alt="Logo" />
          <span className="text-3xl font-bold md:text-top-0 text-black">Chef's Kitchen</span>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="black">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={`items-center justify-around ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
          <ul className="flex flex-col md:flex-row md:space-x-8 text-2xl font-medium text-center text-gray-500" onClick={closeMenu}>
            <li><Link to='/' className="py-5 px-3 text-black  rounded-sm md:bg-transparent md:text-red-500">Home</Link></li>
            <li><Link to='/about' className="py-2 px-3 hover:text-red-500">About Us</Link></li>
            <li><Link to='/services' className="py-2 px-3 hover:text-red-500">Recipe</Link></li>
            <li><Link to='/contact' className="py-2 px-3 hover:text-red-500">Gallery</Link></li>
            <li><Link to='/dishes' className="py-2 px-3 hover:text-red-500">Dishes</Link></li>
          </ul>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <a href="#" className="py-2 hidden md:block hidden text-red-500">+91 7049967683</a>
            <button onClick={() => setOpenpop(true)} className="bg-red-500 text-white px-6 py-2 cursor-pointer rounded-full hover:bg-red-700">Sign In</button>
            {openpop && <Login pop={setOpenpop} />}
            <button className="bg-red-500 text-white px-6 py-2 rounded-full cursor-not-allowed hover:bg-red-700">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;