import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const imageAdded = false;
  return (
    <div className="flex justify-evenly pt-6  ">
      <div className="leftNavbar gap-12 flex items-center text-xl text-blue-700  ">
        <Link to="/" className="hover:text-blue-500 hover:font-bold">
          Home
        </Link> 
        <Link to="/add-expenses" className="hover:text-blue-500 hover:font-bold">
          Add Expenses
        </Link> 
        <Link to="/tracker" className="hover:text-blue-500 hover:font-bold">
          Tracker
        </Link> 
      </div>

      <div className="rightNavbar">
        <img src="../src\assets\AppLogo.jpg" alt="" className="w-24 h-24 	background-image: none;" />
      </div>
    </div>
  );
};
export default Navbar;
