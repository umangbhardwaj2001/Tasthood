import { CDN_URL } from "../utils/contant";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    deliveryTime,
    areaName,
  } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img src={CDN_URL + cloudinaryImageId} />

        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <h4>{avgRatingString}</h4>
        <p>{deliveryTime} Minutes</p>
        <h6>{areaName}</h6>
      </div>
    </div>
  );
};

export default RestaurentCard;
