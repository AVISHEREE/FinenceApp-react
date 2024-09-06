import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const imageAdded = false;
  return (
    <div className="flex justify-around pt-6  ">
      <div className="leftNavbar gap-12 flex items-center text-xl text-cyan-400  ">
        <Link to="/" className="hover:text-cyan-400 hover:font-bold">
          Home
        </Link> 
        <Link to="/add-expenses" className="hover:text-cyan-400 hover:font-bold">
          Add Expenses
        </Link> 
        <Link to="/tracker" className="hover:text-cyan-400 hover:font-bold">
          Tracker
        </Link> 
      </div>

      <div className="rightNavbar">
        <img src="/expensesTrackerDesign.jpg" alt="" className="w-16 h-16" />
      </div>
    </div>
  );
};
export default Navbar;
