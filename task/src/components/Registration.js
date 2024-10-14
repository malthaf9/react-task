import React from "react";

const Registration = () => (
  <div className="flex flex-col md:flex-row justify-between p-2 m-2 text-xl">
    <button className="px-4 py-2 bg-blue-950 text-white rounded-lg mb-2 md:mb-0">
      Registration
    </button>
    
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6">
      <p className="pt-2 md:pt-0">0 items selected</p>
      
      <select className="bg-white text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100">
        <option className="bg-white text-black">Change approval status</option>
      </select>
      
      <button className="px-4 py-2 bg-blue-950 text-white rounded-lg">
        Save
      </button>
    </div>
  </div>
);

export default Registration;

