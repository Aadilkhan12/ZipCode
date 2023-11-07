import React, { useState } from "react";

const ZipCode = ({ onZipCodeSubmit }) => {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onZipCodeSubmit(zipCode);
  };
  return (
    <>
      <form
        className="bg-white p-6 rounded-lg shadow-md max-w-xs"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 mb-2 mr-1 border border-solid border-gray-900 rounded-lg"
          type="text"
          placeholder="Enter Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button
          className="p-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-800"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default ZipCode;
