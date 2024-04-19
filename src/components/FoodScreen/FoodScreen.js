import React from "react";
import { BiSearch, BiMicrophone } from "react-icons/bi";
import Footer from "../Footer/Footer";
import profileImage from "../../assets/profile.png";
import biryani2 from '../../assets/biryani2.png'
import biryani1 from '../../assets/biryani1.png'
import chicken from "../../assets/chicken.png";
import emoji2 from "../../assets/emoji2.png";
import sale from "../../assets/sale.png";
import boy from '../../assets/boy.png'
import boy2 from '../../assets/boy2.png'
import museli from '../../assets/museli.png';
import nutella from '../../assets/nutella.png';

const FoodScreen = () => {
  return (
    <div className=" hedi">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 bars">
        {/* Column containing app name and address */}

        <h1 className="log ">🔖</h1>

        <div className="flex flex-col pr-5 address">
          <h1 className="text-xl font-bold text-black">Salavpur Sattva Ca...</h1>
          <p className="text-sm text-gray-400">
            Kudu Main Road, Maheswara Nagar ^
          </p>
        </div>
        
        {/* Row containing app name, button, and profile image */}
        <div className="flex items-center">
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
            placeholder="Search for 'Pizza"
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

      {/*mega sale */}

      <div className="flex justify-between mt-8 ">
        <div className="flex flex-col text texts">
          {/* Heading */}
          <h2 className="font-cursive text-lg ex ">
            One Exclusive
          </h2>
          <h1 className="font-cubeta text-xl fie">FOOD FIESTA</h1>
          {/* Paragraph */}
          <p className="mt-4 font-bold  ">2 Offers in 1 Order</p>
        </div>
        {/* Image */}
        <div>
          <img src={sale} alt="Paneer" className="fortune" />
        </div>
      </div>
      <div className=" cad1 m-5">
        <img src={emoji2} alt="." className="sugar" />
        <div className="card-contents">
          <h1 className="card-headings">
            CHICKEN WING DEAL
            <p className="card-para">
           
              11 Pieces boneless wings,save flat 25%, <br /> Exclusive sale
            </p>
            <button className="mt-4 mb-2 bg-yellow-600 bu text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-yellow-600">
              Order Now
            </button>
          </h1>
        </div>
        <img src={chicken} alt="." className="sugar im" />
      </div>
      <div className="felx flex-row">
      <div className="flex justify-center mt-8 flex-row ">
        {/* Left column with 2 cards */}
        <div className="flex flex-row">
          <div className="bg-gray-200 p-4 mb-4 First row gg ">
            <div className="col con">
              <h4 className="text-lg font-semibold mb-2 t">GUILT FREE</h4>
              <p className="text-sm mb-2 text-grey-500">OPTIONS</p>
            </div>
            <img src={biryani1} alt="/" className="food1 im" />
          </div>
          {/* Third card */}
          <div className="bg-gray-200 p-4 mb-4 First row gg">
            <div className="col con">
              <h4 className="text-lg font-semibold mb-2 t">GOURMET</h4>
              <p className="text-sm mb-2 text-grey-500">DELIGHT</p>
            </div>
            <img src={biryani2} alt="/" className="food1 im" />
          </div>
        </div>
      </div>
      </div>
      {/*Offers*/}
      <div>
        <h1 className="hy text-black">----------------<span className="offers-for-u" >OFFERS FOR YOU</span>----------------📣</h1>
      <div className="flex  mt-8 justify-center">
        {/* Left column with 2 cards */}
        <div className="flex flex-row ">
          <div className="bg-gray-200 p-4 mb-4 First row gg">
            
          <img src={boy} alt="/" className="food1 im" />
            <div className="col co">
              <h4 className="text-lg font-semibold mb-2 t">POCKET HERO</h4>
              <p className="text-sm mb-2 text-grey-500">Up to 60% Off</p>
            </div>
          </div>
          {/* Third card */}
          <div className="bg-gray-200 p-4 mb-4 First row gg">
          <img src={boy2} alt="/" className="food1 im" />
            <div className="col co">
              <h4 className="text-lg font-semibold mb-2 t">MORE OFFERS</h4>
              <p className="text-sm mb-2 text-grey-500">Buy 1 Get 1 & More</p>
            </div>
            
          </div>
        </div>
      </div>
      <h1 className="hy text-black">----------------<span className="offers-for-u" >YOUR TRUSTED PICKS🍻</span>----------------</h1>
      <div className="flex flex-row justify-center mt-5">
          {/* First card */}
          <div className=" p-4 mb-4 Firt ">
            <div className="col">
            <p className="text-lg mb-2 text-yellow-50">25% OFF</p>
              <h4 className="text-lg font-semibold mb-2  picks">SAVE 123</h4>
            
              <p className="text-xl text-red-500 sha">Free Delivery</p>
            </div>
            <img src={museli} alt="/" className="foodsale" />
          </div>
          {/* Second card */}
          <div className=" p-4 mb-4 Firt ">
            <div className="col">
            <p className="text-lg mb-2 text-yellow-50">SAVE 100</p>
              <h4 className="text-lg font-semibold mb-2 picks">25% OFF</h4>
              
            </div>
            <img src={nutella} alt="/" className="foodsale" />
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodScreen;
