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
    const data = await fetch("http://localhost:3000/fetch-data");
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
