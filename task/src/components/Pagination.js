import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, handlePageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 mt-4 overflow-x-auto">
      <button
        className="px-3 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-3 py-2 text-sm md:text-base rounded-md transition-colors ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="px-3 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;





