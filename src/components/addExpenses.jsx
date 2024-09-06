import React from "react";

const AddExpenses = ({onClose}) => {
  return (
    <>
      <div className="w-screen flex justify-center items-center absolute bottom-1/4 pt-60">
        <div className="border bg-white border-slate-950 p-6 rounded-lg shadow-lg absolute top-0">
        <button
            onClick={onClose}
            className="absolute top-0 right-0 text-red-500 hover:text-red-700 font-bold"
          >
            ❌
          </button>
          <input
            type="text"
            placeholder="Enter your expense amount"
            className="border border-gray-300 h-10 px-4 mb-4 w-full rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
          />
          <input
            type="text"
            placeholder="Enter expense description"
            className="border border-gray-300 h-10 px-4 mb-4 w-full rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
          />
          <select
            name="expenseType"
            className="border border-gray-300 h-10 px-4 mb-4 w-full rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
            id=""
          >
            <option disabled selected>
              Select Expense Type
            </option>
            <option value="clothing">Clothing 👔</option>
            <option value="groceries">Groceries 🛒</option>
            <option value="entertainment">Entertainment 🎬</option>
            <option value="transportation">Transportation 🚗</option>
            <option value="utilities">Utilities 💡</option>
            <option value="healthcare">Healthcare 🏥</option>
            <option value="dining">Dining 🍽️</option>
            <option value="education">Education 📚</option>
            <option value="travel">Travel ✈️</option>
            <option value="others">Others 🛠️</option>
          </select>

          <button className="w-full h-10 bg-blue-500 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-600 transition duration-300">
            Enter Entry
          </button>
        </div>
      </div>
    </>
  );
};

export default AddExpenses;
