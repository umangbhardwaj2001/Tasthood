import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  Logo
 *  Nav-Items
 * Body
 *  Search
 *  ReastaurantCardsContainer
 *      ReastaurantCard
 * Footer
 *  copyright
 *  Links
 *  Address
 *  contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.logodesign.net%2F&psig=AOvVaw3Sm6Kd0-yXZFJ1-xBiQLQs&ust=1710096037145000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLje6Krq54QDFQAAAAAdAAAAABAD"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurentCard = () => {
  return (
    <div className="res-card">
      <div className="res-logo">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ev77rp3s2yb8gyu36nlq" />
        <p>plain Pizza</p>
        <h3>4.8 rating</h3>
        <h4>30 mins </h4>
        <h6>Italian</h6>
        <h5>Rajnagar</h5>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" class="search-input" placeholder="Search..." />
        <button class="search-button">Search</button>
      </div>
      <div className="res-container">
        <RestaurentCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
