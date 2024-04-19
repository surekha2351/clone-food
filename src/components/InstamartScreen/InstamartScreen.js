import React from "react";
import { BiSearch, BiMicrophone } from "react-icons/bi";
import Footer from "../Footer/Footer";
import profileImage from "../../assets/profile.png";
import electronic from "../../assets/electronics_image.jpg";
import Personal from "../../assets/personalcare_image.jpg";
import home from "../../assets/homecare_image.jpg";
import cooking from "../../assets/cookie_image.jpg";
import sugar from "../../assets/sugar.jpg";
import emoji from "../../assets/emoji.png.png";
import Personal1 from "../../assets/personal1.png";
import home1 from "../../assets/home1.png";
import cooking1 from "../../assets/cooking1.png";
import "./insta.css";

const InstamartScreen = () => {
  return (
    <div className=" hedd">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 bar">
        {/* Column containing app name and address */}

        <h1 className="text-sm py-1 px-3 button ">9 Mins Fast Delivery 🚴‍♀️</h1>

        <div className="flex flex-col pr-5 address">
          <h1 className="text-xl font-bold">Delivery to Salavpur Sattva</h1>
          <p className="text-sm text-gray-500">
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

      {/*mega sale */}

      <div className="p-4 pt-9 sale">
        <p className="text-lg mb-6 ">Sale is Live Now</p>
        <h2 className="text-4xl font-extrabold mb-4 animate-charcter">
          MEGA SAVINGS FESTIVAL
        </h2>
        <br />
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded off">
          Up to 50% Off
        </button>
        {/* Grocery items go here */}
        <div className="card-row">
          <div className="card">
            <img src={cooking} alt="Cookies Essentials" />
            <p className="card-name">Cookies Essentials</p>
          </div>
          <div className="card">
            <img src={home} alt="Home Care" />
            <p className="card-name">Home Care</p>
          </div>
          <div className="card">
            <img src={Personal} alt="Personal Care" />
            <p className="card-name">Personal Care</p>
          </div>
          <div className="card">
            <img src={electronic} alt="Electronics" />
            <p className="card-name">Electronics</p>
          </div>
        </div>
        <div className="horizontal-card card1">
          <img src={sugar} alt="." className="sugar" />
          <div className="card-content">
            <h3 className="card-heading">
              <span className="free"> FREE 1KG SUGAR </span> On all orders above
              999
            </h3>
          </div>
          <img src={emoji} alt="." className="sugar" />
        </div>
      </div>
      <div>
        <h2 className="content"> Best Prices, Always</h2>
        <p className="line"><hr /></p>
      </div>
      <div className="card-row">
        <div className="card">
          <img src={cooking1} alt="Cookies Essentials" />
          <p className="card-name pb-5">Daily Deals</p>
        </div>
        <div className="card">
          <img src={home1} alt="Home Care" />
          <p className="card-name">Hot Prices</p>
        </div>
        <div className="card">
          <img src={Personal1} alt="Personal Care" />
          <p className="card-name">Best Deals</p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default InstamartScreen;
