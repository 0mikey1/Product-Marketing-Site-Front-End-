import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="landing">
      <h1>Welcome to Flavore Dynamic Menus.</h1>
      <h2>
        {" "}
        A QR code menu service that both the restaurant and patron love.{" "}
      </h2>
      <img src="https://cdn-icons.flaticon.com/png/512/3073/premium/3073798.png?token=exp=1658869814~hmac=49544205d169c9b0c27fc7415d4ec7be" />
      <Link to="/features">
        <button>Learn more!</button>
      </Link>
    </div>
  );
};

export default Home;
