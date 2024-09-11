import React from "react";
import { CloudSun, CloudRainWind, Sun, Search } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import weather from "../assets/images/weather warning.jpg";
import flood from "../assets/images/flood.png";

const WeatherIcon = ({ condition }) => {
  switch (condition) {
    case "Cloudy, Sunny Intervals":
      return <CloudSun className="w-8 h-8 text-white" />;
    case "Sunny Intervals , Showers":
      return <CloudRainWind className="w-8 h-8 text-white" />;
    case "Sunny Intervals":
      return <Sun className="w-8 h-8 text-white" />;
    default:
      return <CloudSun className="w-8 h-8 text-white" />;
  }
};

const WeatherCard = ({ city, condition, minTemp, maxTemp }) => (
  <div className="text-white text-center p-3">
    <h3 className="font-bold">{city}</h3>
    <WeatherIcon condition={condition} />
    <p className="text-sm">{condition}</p>
    <p className="text-sm">
      Temperature
      <br />
      Min: {minTemp}°C
      <br />
      Max: {maxTemp}°C
    </p>
  </div>
);

const Home = () => {
  const weatherData = [
    {
      city: "Koforidua",
      condition: "Cloudy, Sunny Intervals",
      minTemp: 22,
      maxTemp: 32,
    },
    {
      city: "Cape Coast",
      condition: "Sunny Intervals , Showers",
      minTemp: 23,
      maxTemp: 30,
    },
    { city: "Ho", condition: "Sunny Intervals", minTemp: 19, maxTemp: 32 },
    {
      city: "Takoradi",
      condition: "Sunny Intervals",
      minTemp: 21,
      maxTemp: 33,
    },
    {
      city: "Accra",
      condition: "Sunny Intervals",
      minTemp: 23,
      maxTemp: 31,
    },
    {
      city: "Bole",
      condition: "Cloudy, Sunny Intervals",
      minTemp: 25,
      maxTemp: 37,
    },
    {
      city: "Tamale",
      condition: "Sunny Intervals",
      minTemp: 24,
      maxTemp: 36,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <header className="bg-white p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/path-to-ghaap.png"
            alt="Ghaap img"
            className="h-12 md:h-16"
          />
          <div>
            <h1 className="text-red-600 font-bold text-lg md:text-xl">
              MoFA-FSRP
            </h1>
            <h2 className="text-green-600 font-bold text-md md:text-lg">
              AND GMet
            </h2>
            <p className="text-sm">GhAAP</p>
          </div>
        </div>
        <nav className="space-x-2 md:space-x-4 text-sm mt-4 md:mt-0">
          <a href="#" className="text-blue-600">
            HOME
          </a>
          <a href="#" className="text-blue-600">
            FORECAST
          </a>
          <a href="#" className="text-blue-600">
            CLIMATE
          </a>
          <a href="#" className="text-blue-600">
            CONTACT US
          </a>
          <Search className="inline-block w-4 h-4 text-blue-600" />
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl text-white text-center my-4 md:my-6">
          Climate Information Services
        </h1>

        {/* Social Icons - Responsive */}
        <div className="flex justify-center md:justify-end space-x-2 md:space-x-4 my-4">
          <a href="#">
            <img
              src="/path-to-facebook-icon.png"
              alt="Facebook"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
          <a href="#">
            <img
              src="/path-to-twitter-icon.png"
              alt="Twitter"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
          <a href="#">
            <img
              src="/path-to-instagram-icon.png"
              alt="Instagram"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
          <a href="#">
            <img
              src="/path-to-ncap-icon.png"
              alt="NCAP"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
        </div>

        <div className="bg-blue-500 rounded-lg shadow-lg p-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-lg md:text-xl">
              Weather for 11 Sep 2024, Afternoon
            </h2>
            <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded">
              More Towns &gt;&gt;
            </button>
          </div>

          {/* Responsive Weather Card Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-4">
            {weatherData.map((data, index) => (
              <WeatherCard key={index} {...data} />
            ))}
          </div>
        </div>

        {/* Responsive Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-blue-600 font-bold mb-2">
              Today&apos;s Weather
            </h2>
            <MapContainer
              center={[7.9465, -1.0232]}
              zoom={6}
              className="h-64 md:h-96"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[5.614818, -0.205874]}>
                <Popup>Accra: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[4.9016, -1.7831]}>
                <Popup>Takoradi: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[6.6666, -1.6163]}>
                <Popup>Kumasi: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[9.4034, -0.8424]}>
                <Popup>Tamale: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[6.6101, 0.4785]}>
                <Popup>Ho: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[7.5909, -1.9344]}>
                <Popup>Techiman: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[10.3516, -0.7985]}>
                <Popup>Walewale: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[6.2159, -2.4851]}>
                <Popup>Sefwi Wiawso: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[10.0601, -2.5099]}>
                <Popup>Wa: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[9.0913, -1.827]}>
                <Popup>Damongo: Sunny Intervals</Popup>
              </Marker>
            </MapContainer>

            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">
              Reset Map
            </button>
          </div>

          {/* Sidebar Forecast */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-blue-600 font-bold mb-2">Other Forecasts</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-600">
                  5 Days Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  7 Days Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Agrometeorological Bulletins
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Flood and Drought Bulletins
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Subseasonal 2 Seasonal Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Monthly Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Seasonal Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  State of the Climate Report 2023
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 mt-24">
          <div className="bg-yellow-600 p-4 rounded-lg text-center w-80 md:w-auto">
            <h3 className="font-bold text-base">Daily Weather Forecast</h3>
            <img
              src={weather}
              alt="Weather Alert"
              className="mt-2 w-80 h-70 object-cover"
            />
          </div>
          <div className="bg-yellow-600 p-4 rounded-lg text-center w-80 md:w-auto">
            <h3 className="font-bold text-base">Weekly Forecast</h3>
            <img
              src={weather}
              alt="Weather Alert"
              className="mt-2 w-80 h-70 object-cover"
            />
          </div>
          <div className="bg-yellow-600 p-4 rounded-lg text-center w-80 md:w-auto">
            <h3 className="font-bold text-base">
              Get Weather Advisories & Alerts
            </h3>
            <img
              src={flood}
              alt="Weather Alert"
              className="mt-2 w-80 h-70 object-cover"
            />
          </div>
        </div>
      </main>

      <footer className="bg-blue-900 text-white mt-8 p-4 text-center">
        <p>&copy; 2024 GhAAP. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Home;
