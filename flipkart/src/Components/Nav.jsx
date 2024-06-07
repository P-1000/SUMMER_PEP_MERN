import React from "react";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center lg:p-4 p-2 mb-2 bg-white text-white">
      <div className="lg:mr-4">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_joinplus-3a4cec.svg"
          alt="flipkart logo"
          className="lg:h-10 h-7"
        />
      </div>
      <div className="hidden lg:flex items-center bg-slate-200 py-[2px] w-4/12 rounded-md flex-grow mx-4">
        <CiSearch className="text-gray-400 text-2xl mx-2" />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="w-8/12 p-2 text-black bg-slate-200  rounded-md focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-6 text-black w-4/12">
        <div className="flex items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
            alt="profile"
            className="h-6"
          />
          <span className="ml-2">Bankai</span>
        </div>
        <div className="lg:flex hidden items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt="cart"
            className="h-6"
          />
          <span className="ml-2">Cart</span>
        </div>
        <div className="lg:flex hidden items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
            alt="seller"
            className="h-6"
          />
          <span className="ml-2">Become a Seller</span>
        </div>
        <div className="flex items-center px-3 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
            alt="more"
            className="h-6"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
