import React from 'react';
import Logo from '../assets/images/header-logo.svg'; 
import hamburger from '../assets/icons/hamburger.svg';


const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-5 bg-gray-100">
      
        <a href="#">
          <img src={Logo} alt="Brand Logo" className="h-10" />
        </a>

     
       

       
        <ul className="hidden md:flex space-x-5 h-10">
          <li>
            <a href="#" className="hover:text-blue-600">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">Products</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="Menu" className="h-8" />
        </div>
      </nav>
      
    </header>
  );
};

export default Navbar;
