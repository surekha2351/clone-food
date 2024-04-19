import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaShoppingBasket, FaShoppingCart, FaRegCreditCard, FaLightbulb } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import { RiRestaurantLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center ">
      <div className="flex justify-center gap-8">
        <Link to="/home" className="flex flex-col items-center text-sm">
          <RiRestaurantLine size={24} />
          <span>Swiggy</span>
        </Link>
        <Link to="/instamart" className="flex flex-col items-center text-sm">
          <FaShoppingBasket size={24} />
          <span>Instamart</span>
        </Link>
        <Link to="/food" className="flex flex-col items-center text-sm">
          <GiCookingPot size={24} />
          <span>Food</span>
        </Link>
        <Link  className="flex flex-col items-center text-sm">
          <FaLightbulb size={24} />
          <span>Dineout</span>
        </Link>
        <Link className="flex flex-col items-center text-sm">
          <FaRegCreditCard size={24} />
          <span>CreditCard</span>
        </Link>
        <Link className="flex flex-col items-center text-sm">
          <FaShoppingCart size={24} />
          <span>CreditCard</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
