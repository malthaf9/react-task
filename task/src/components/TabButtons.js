import React from "react";

const TabButtons = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <div className="flex  justify-center space-x-2 overflow-x-auto">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-white focus:text-black">
          Basic Information management
        </button>
        <button className="px-4 py-2 bg-blue-950 text-white rounded-lg focus:outline-none focus:bg-white focus:text-black">
          Investment type management
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-white focus:text-black">
          Deposit/withdrawal details
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-white focus:text-black">
          Sales history inquiry
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-white focus:text-black">
          Investment details inquiry
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-white focus:text-black">
          View bond details
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-white focus:text-black">
          SMS Manage details
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-white focus:text-black">
          Consultation history management
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-white focus:text-black">
          1:1 Inquiry history
        </button>
      </div>
    </div>
  );
};

export default TabButtons;










