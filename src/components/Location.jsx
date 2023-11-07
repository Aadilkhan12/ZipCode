import React from "react";

const LocationInfo = ({ location, clearLocation }) => {
  if (!location) {
    return null;
  }

  const { country, state, placeName } = location;
  return (
    <>
      <h2>Location Information</h2>
      <div className="item">
        <p className="my-2">Country : {country}</p>
        <p className="my-2">State : {state}</p>
        <p>Place Name : {placeName}</p>
        <button
          className="p-2 bg-blue-600 text-white rounded-lg cursor-pointer"
          onClick={clearLocation}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default LocationInfo;
