import mockData from "../utils/mockData";
import { useState } from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [data, setData] = useState(mockData);
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
