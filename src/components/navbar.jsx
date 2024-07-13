import React from 'react'

 const Navbar = () => {
    const imageAdded = false;
  return (
    <div className='flex justify-around pt-6  '>
        <div className="leftNavbar gap-12 flex items-center text-xl text-cyan-400  ">
            <a href="/add" className='hover:text-cyan-400 hover:font-bold'>Home</a>
            <a href="" className='hover:text-cyan-400 hover:font-bold'>Add Expenses</a>
            <a href="" className='hover:text-cyan-400 hover:font-bold'>Tracker</a>
        </div>
        
        <div className="rightNavbar">
            <img src="/expensesTrackerDesign.jpg" alt="" className='w-16 h-16'/>
        </div>
    </div>
  )
}
export default Navbar
