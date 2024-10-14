import React, { useState } from "react";
import { data } from "./mockData.js"; 

const Data = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; 

  // Get current rows based on pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Individual checkboxes
  const handleCheckBoxChange = (no) => {
    if (selectedRows.includes(no)) {
      setSelectedRows(selectedRows.filter((selectedNo) => selectedNo !== no));
    } else {
      setSelectedRows([...selectedRows, no]);
    }
  };

  // Handle select all checkboxes
  const handleSelectAllChange = () => {
    if (!selectAll) {
      const allRowNos = data.map((item) => item.no); 
      setSelectedRows(allRowNos);
    } else {
      setSelectedRows([]);
    }
    setSelectAll(!selectAll);
  };

  // Function to determine the button color based on approval status
  const getButtonColor = (approval) => {
    switch (approval) {
      case "Waiting for approval":
        return "#FFEDD5"; // Light orange
      case "Approval denied":
        return "#FBCFE8"; // Light pink
      case "Approved":
        return "#D1FAE5"; // Light green
      default:
        return "#CCCCCC"; // Default gray color
    }
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="p-2 bg-gray-200 border border-gray-300">
                <input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} />
              </th>
              <th className="p-2 bg-gray-200 border border-gray-300">No</th>
              <th className="p-2 bg-gray-200 border border-gray-300">Existing Type</th>
              <th className="p-2 bg-gray-200 border border-gray-300">Application Type</th>
              <th className="p-2 bg-gray-200 border border-gray-300">Documents</th>
              <th className="p-2 bg-gray-200 border border-gray-300">Application Date and Time</th>
              <th className="p-2 bg-gray-200 border border-gray-300">Approval</th>
              <th className="p-2 bg-gray-200 border border-gray-300">Rejection Reason</th>
              <th className="p-2 bg-gray-200 border border-gray-300">Approval Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={item.no} className={`border-b border-gray-300 ${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                <td className="p-2 border-l border-white">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.no)}
                    onChange={() => handleCheckBoxChange(item.no)}
                  />
                </td>
                <td className="p-2 border-l border-white">{item.no}</td>
                <td className="p-2 border-l border-white break-words">{item.existingType}</td>
                <td className="p-2 border-l border-white break-words">{item.applicationType}</td>
                <td className="p-2 border-l border-white">
                  <button className="rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200 truncate">
                    {item.documents}
                  </button>
                </td>
                <td className="p-2 border-l border-white break-words">{item.applicationDateTime}</td>
                <td className="p-2 border-l border-white">
                  <button
                    style={{ backgroundColor: getButtonColor(item.approval) }}
                    className="m-2 px-4 text-black hover:bg-opacity-80 rounded-lg truncate"
                  >
                    {item.approval}
                  </button>
                </td>
                <td className="p-2 border-l border-white break-words">{item.rejectionReason || ""}</td>
                <td className="p-2 border-l border-white break-words">{item.approvalDateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="flex flex-wrap justify-center mt-4 space-x-2">
        <button
          className="px-3 py-2 bg-gray-200 rounded-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            className={`px-3 py-2 ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"} rounded-md`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-3 py-2 bg-gray-200 rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Data;






















