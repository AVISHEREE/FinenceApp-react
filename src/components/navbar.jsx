import React , {useState} from "react";
import { Link } from "react-router-dom";
import AddExpenses from "./addExpenses.jsx";

const Navbar = () => {
  const [addExpensesToglleBtn, setaddExpensesToglleBtn] = useState(false)
  const changeAddExpensesState = ()=>{
  setaddExpensesToglleBtn(!addExpensesToglleBtn);
  }
  return (
    <div className="flex justify-evenly pt-6  ">
      <div className="leftNavbar gap-12 flex items-center text-xl text-blue-700  ">
        <Link to="/" className="hover:text-blue-500 hover:font-bold">
          Home
        </Link> 
        <Link className="hover:text-blue-500 hover:font-bold">
          <button onClick={changeAddExpensesState}>Add Expenses</button>
        </Link> 
        <Link to="/tracker" className="hover:text-blue-500 hover:font-bold">
          Tracker
        </Link> 
      </div>

      <div className="rightNavbar">
        <img src="../src\assets\AppLogo.jpg" alt="" className="w-24 h-24 	background-image: none;" />
      </div>
      {addExpensesToglleBtn?<AddExpenses />:null}
    </div>
  );
};
export default Navbar;
