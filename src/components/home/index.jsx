import React from "react";
import { useAuth } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import profileImage from "../../assets/profile.png";
import Paneer from "../../assets/panner.jpg";
import biryani from "../../assets/biryani.jpg";
import food from "../../assets/food.jpg";
import "./home.css";
import { BiSearch, BiMicrophone } from "react-icons/bi";
import Footer from "../Footer/Footer";
const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className=" hed">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 bar">
        {/* Column containing app name and address */}
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Cadenza</h1>
          <p className="text-sm text-gray-500">
            1902 Calypso, Cadenza, Kudlu Main Road
          </p>
        </div>
        {/* Row containing app name, button, and profile image */}
        <div className="flex items-center">
        
            <button className="text-sm text-red-500 bg-white-600 py-1 px-3    button mr-4">
              One
            </button>
         
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
      {/* Main content */}
      <div className="flex justify-center items-center">
        {/* Search bar */}
        <div className="relative flex items-center search">
          <input
            type="text"
            placeholder="Search"
            className="py-1 px-4 pr-12 border rounded-l focus:outline-none focus:border-red-500  search" // Adjusted width here
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            {/* Search icon */}
            <BiSearch className="h-6 w-6 text-red-500 mr-2" />
            {/* Microphone icon */}
            <BiMicrophone className="h-6 w-6 text-red-500 mr-2" />
            {/* Mirror icon */}
          </div>
        </div>
      </div>

      {/* Menu */}

      <div className="flex justify-between mt-8 u">
        <div className="flex flex-col text">
          {/* Heading */}
          <h2 className="font-cursive text-lg text-red-500 hh">Say hi to</h2>
          <h1 className="font-cubeta text-xl h">Insanely good</h1>
          {/* Paragraph */}
          <p className="mt-4">
            Freshly hand made paneer,
            <br /> stone ground batter & more
          </p>
          {/* Button */}
          <button className="mt-4 bg-red-500 bu text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
            Shop Now
          </button>
        </div>
        {/* Image */}
        <div>
          <img src={Paneer} alt="Paneer" className="img" />
        </div>
      </div>
      {/*cards*/}
      <div className="flex justify-between mt-8">
        {/* Left column with 2 cards */}
        <div className="flex flex-col">
          {/* First card */}
          <div className=" First-1">
            <h4 className="text-lg font-semibold mb-2 text-black ">
              Food Delivery
            </h4>
            <p className="text-sm mb-2 ">One Good Fista</p>
            <p className="text-xs text-red-500">Upto 60% off + Free Del</p>
            <img src={biryani} alt="/" className="foods" />
          </div>
          {/* Second card */}
          <div className=" First-2">
            <h4 className=" font-semibold mb-2">DineOut</h4>
            <p className="text-sm mb-2">GRif dining Festival</p>
            <p className="text-xs text-red-500">Flat 50% off</p>
            <img src={biryani} alt="/" className="food" />
          </div>
        </div>
        {/* Right column with 4 cards */}
        <img src={food} alt="img" />
        <div className="flex flex-col">
          {/* First card */}
          <div className="bg-gray-200 p-4 mb-4 First row">
            <div className="col">
              <h4 className="text-lg font-semibold mb-2">Instamart</h4>
              <p className="text-sm mb-2">Instant Grocery</p>
              <p className="text-xs text-red-500">Free Delivery</p>
            </div>
            <img src={biryani} alt="/" className="food1" />
          </div>
          {/* Second card */}
          <div className="bg-gray-200 p-4 mb-4 First row">
            <div className="col">
              <h4 className="text-lg font-semibold mb-2">Geine</h4>
              <p className="text-sm mb-2 text-grey-500">Pickup-Drop</p>
            </div>
            <img src={biryani} alt="/" className="food1" />
          </div>
          {/* Third card */}
          <div className="bg-gray-200 p-4 mb-4 First row">
            <div className="col">
              <h4 className="text-lg font-semibold mb-2">Minus</h4>
              <p className="text-sm mb-2 text-grey-500">Unique Finds</p>
            </div>
            <img src={biryani} alt="/" className="food1" />
          </div>
          {/* Fourth card */}
          <div className="bg-gray-200 p-4 First row last">
            <div className="col">
              <h4 className="text-lg font-semibold mb-2">Insanely Good</h4>
              <p className="text-sm mb-2 text-grey-500">Quality Grocery</p>
            </div>
            <img src={biryani} alt="/" className="food1" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
