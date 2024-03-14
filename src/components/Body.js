import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import BodyShimmer from "./BodyShimmer";
const Body = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("Working");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"
    );
    const json = await data.json();
    cleanJson =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setData(cleanJson);
  };
  if (data.length == 0) {
    return (
      <div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <BodyShimmer />
      </div>
    );
  }
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button
          className="search-button"
          onClick={() => {
            filteredData = data.filter(
              (restaurent) => restaurent.info.avgRatingString > 4.5
            );
            setData(filteredData);
            // console.log(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {data.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
