import React from "react";

function Home() {
  return (
    <>
      <div className="wallet  flex justify-center pt-7 gap-7 ">
        <div className="amount  font-bold font-mono  rounded-xl w-40 h-16 flex justify-center items-center text-white bg-neutral-800 ">
          3000 USD
        </div>
        <div className="amountInput text-center flex items-center">
          <input
            type="number"
            placeholder="Add salary"
            className="w-56 h-16 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
          />
        </div>
        <div className="flex space-x-2 items-center">
          <select
            name="selectCurrency"
            className="border border-gray-300 h-10 px-4 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
            id=""
          >
            <option value="rupees">Select Currency</option>
            <option value="rupees">Indian Rupees</option>
            <option value="USD">USD</option>
          </select>
          <button className="inline-flex items-center justify-center h-10 w-28 border border-gray-300 bg-blue-500 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </div>
      </div>

      <div className="expensesDisplay">no expenses to see here</div>
    </>
  );
}

export default Home;
