

import ZipCode from "./components/Input";
import LocationInfo from "./components/Location";
import { useState } from "react";

const App = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLocation = async (zipCode) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.zippopotam.us/in/${zipCode}`);
      if (response.ok) {
        const data = await response.json();
        const info = data.places[0];
        setLocation({
          country: data.country,
          state: info.state,
          placeName: info["place name"],
        });
        setError("");
      } else {
        setError("Location Not Found");
        setLocation(null);
      }
    } catch (err) {
      setError("An Error Occurred");
      setLocation(null);
    } finally {
      setLoading(false);
    }
  };
  const clearLocation = () => {
    setLocation(null);
  };
  return (
    <div className=" bg-my-image text-center m-0 p-0 bg-gray-300 h-screen flex flex-col items-center  ">
      <h2 className="text-2xl mb-5">Zip Code App</h2>
      <ZipCode onZipCodeSubmit={fetchLocation} />
      {loading && <p>Loading...</p>}
      {error && <p className="my-2 text-red-500">{error}</p>}
      <LocationInfo location={location} clearLocation={clearLocation} />
    </div>
  );
};
export default App;
