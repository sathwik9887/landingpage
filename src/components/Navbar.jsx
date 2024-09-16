import React from 'react';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';
import Bg from '../assets/Image.png';
import Grocery from '../assets/grocery-image.png';

const Navbar = () => {
  return (
    <div
      className='container min-h-screen relative'
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <nav className="flex justify-between items-center px-10 py-6">
        <img src={Logo} alt="Logo" className="h-10 w-40 cursor-pointer" />
        <ul className="flex space-x-20 text-white">
          <li><a href="http://" className="hover:text-gray-300">Home</a></li>
          <li><a href="http://" className="hover:text-gray-300">Blog</a></li>
          <li><a href="http://" className="hover:text-gray-300">About</a></li>
          <li><a href="http://" className="hover:text-gray-300">Contact</a></li>
        </ul>
        <img src={Cart} alt="Cart" className="h-10" />
      </nav> 
      
      <div className='text-white mt-48 px-10'>
        <h1 className='text-6xl font-semibold leading-snug'>
          Groceries <br />Delivery in <span className='font-light'>15 Mins</span>
        </h1>
        <p className='text-lg '>
          Grocify offers a wide range of products, including fresh produce, meats, <br />dairy, baked goods, and non-perishable items.
        </p>
      </div>

      <div className='mt-10 px-10 flex space-x-5'>
        <a href="#" className="bg-yellow-300 text-black rounded-3xl px-8 py-3 font-medium inline-block mr-8 hover:bg-transparent hover:text-white duration-300 hover:border border border-transparent">
          Order Now
        </a>

        <a href="" className='text-white px-0 py-3'>Download App <span className='text-lg inline-block rotate-90'>&#8594;</span></a>
      </div>

      {/* Increased size of Grocery image */}
      <img src={Grocery} className="w-full xl:w-2/5 xl:absolute bottom-0 right-20 h-auto" alt="Grocery" />
    </div>
  );
}

export default Navbar;
