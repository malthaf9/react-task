import React from "react";
import TabButtons from "./TabButtons";

const Header = () => (
  <div className="p-2 sm:p-4 m-2 text-lg sm:text-xl rounded-lg">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-2 border-b-2">
      {/* Member details heading */}
      <div className="flex items-center">
        <h1 className="text-lg sm:text-2xl">
          Member details <span className="text-red-400 text-xl">°</span>
        </h1>
        <h1 className="ml-2 text-red-700 text-sm sm:text-lg">Required items</h1>
      </div>
    </div>
    
    {/* TabButtons component */}
    <div className="mt-2">
      <TabButtons />
    </div>
  </div>
);

export default Header;




