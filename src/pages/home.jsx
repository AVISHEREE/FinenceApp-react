import Navbar from "../components/navbar"
import React from "react"


function Home() {
  return (
    <>
      <Navbar />
      <div className="wallet  flex justify-center pt-12 gap-16 ">
        <div className="amount  font-bold font-mono  rounded-xl w-40 h-16 flex justify-center items-center text-white bg-neutral-800 ">3000 USD</div>
        <div className="amountInput text-center flex items-center" >
          <form action="submit" className="flex gap-5">
            <input type="number" placeholder="add salary" className=" w-56 h-14 border border-black " />
            <select name="selectCurrency" className="border border-black h-8  " id="">
              <option value="rupees">select Currency</option>
              <option value="rupees">INDIAN RUPEES</option>
              <option value="USD">USD</option>
            </select>
            <button className="border border-black h-8 w-20 flex justify-center items-center">submit</button>
          </form>
        </div>
      </div>

      <div className="expensesDisplay">no expenses to see here</div>
    </>
  )
}

export default Home