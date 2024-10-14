import React from "react";

const DropDowns = () => (
  <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4 mt-2 w-full">
    {/* Dropdown 1 */}
    <select className="w-full md:w-auto bg-white text-black p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100">
      <option className="bg-white text-black">Approval All</option>
      <option className="bg-white text-black">Waiting for approval</option>
      <option className="bg-white text-black">Approved</option>
      <option className="bg-white text-black">Approval denied</option>
    </select>

    {/* Dropdown 2 */}
    <select className="w-full md:w-auto bg-white text-black p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100">
      <option className="bg-white text-black">In order of application date and time</option>
      <option className="bg-white text-black">Approval date and time</option>
    </select>

    {/* Dropdown 3 */}
    <select className="w-full md:w-auto bg-white text-black p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100">
      <option className="bg-white text-black">View 50 each</option>
    </select>
  </div>
);

export default DropDowns;

