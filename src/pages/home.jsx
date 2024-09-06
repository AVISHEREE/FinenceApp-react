import React, { useState, useEffect } from "react";

function Home() {
  const [salary, setSalary] = useState("");
  const [addWallet, setAddWallet] = useState(false);
  const [currency, setCurrency] = useState("rupees"); // New state for currency

  // Load salary and currency from localStorage on component mount
  useEffect(() => {
    const storedSalary = localStorage.getItem("salary");
    const storedCurrency = localStorage.getItem("currency") || "rupees";
    if (storedSalary) {
      setSalary(storedSalary);
      setCurrency(storedCurrency);
      setAddWallet(true); 
    }
  }, []);

  // Function to save salary and currency in localStorage and toggle the wallet display
  const addSalary = () => {
    if(salary===""){
      alert("please enter all salary")
    }
    if (salary) {
      localStorage.setItem("salary", salary); // Save salary to localStorage
      localStorage.setItem("currency", currency); // Save selected currency to localStorage
      setAddWallet(true); // Show the wallet with the salary
    }
  };

  return (
    <>
      <div className="wallet flex justify-center pt-7 gap-7">
        {addWallet ? (
          <div className="amount-section flex flex-col items-center">
            <div className="amount font-bold font-mono rounded-xl w-40 h-16 flex justify-center items-center text-white bg-neutral-800">
              {salary} {currency === "rupees" ? "Rupees" : "USD"}
            </div>
            <button
              onClick={() => setAddWallet(false)}
              className="mt-4 inline-flex items-center justify-center h-10 w-28 border border-gray-300 bg-blue-500 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-600 transition duration-300"
            >
              Add Money
            </button>
          </div>
        ) : (
          <div>
            <div className="amountInput text-center flex items-center">
              <input
                type="number"
                placeholder="Add salary"
                className="w-72 h-16 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="flex space-x-1 items-center mt-2">
              <select
                name="selectCurrency"
                className="border border-gray-300 h-10 px-4 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                onChange={(e) => setCurrency(e.target.value)} // Update currency state
                value={currency}
              >
                <option value="rupees">Indian Rupees</option>
                <option value="USD">USD</option>
              </select>
              <button
                onClick={addSalary}
                className="inline-flex items-center justify-center h-10 w-32 border border-gray-300 bg-blue-500 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
            <button
              onClick={() => setAddWallet(true)}
              className="mt-1.5 ml- inline-flex items-center justify-center h-10 w-32 border border-gray-300 bg-red-500 text-white font-semibold rounded-lg shadow-sm hover:bg-red-600 transition duration-300"
            >
              Go Back
            </button>
          </div>
        )}
      </div>

      <div className="expensesDisplay text-center mt-5">
        No expenses to see here
      </div>
    </>
  );
}

export default Home;
