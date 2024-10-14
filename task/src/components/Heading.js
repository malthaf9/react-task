import React from "react";
import DropDowns from "./DropDowns";

const Heading = () => (
  <div className="p-2 m-2 text-xl">
    {/* Flex layout, with responsive stacking on small screens */}
    <div className="flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-center md:text-left mb-2 md:mb-0">
        Application list (Total 100 people | 1 waiting for approval)
      </h1>
      <DropDowns />
    </div>
    <hr className="border-t-2 border-gray-200 mt-4" />
  </div>
);

export default Heading;



