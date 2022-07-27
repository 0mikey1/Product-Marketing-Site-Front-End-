import React from "react";
import "./features.css";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="features">
      <h1>Product Features</h1>;
      <h2> Fast, easy & simple. Built for frictonless functionality.</h2>
      <p>
        {" "}
        <br></br> <br></br>
        Flavore Dynamic Menu's is a QR code menu service that was founded in
        response to the covid-19 pandemic. At Flavore, our goal is to provide
        restaurants a dynamic digital menu that is easy to access for patrons
        via QR code scanning.
        <br></br> <br></br>You provide us with your menu items and their
        ingredients. We provide you a menu where items are filterable by their
        nutritional content and ingredients.
        <br></br> <br></br>
        With administrave access to your Flavore menu, you have the ability to
        keep track of sales data, add custom filters to your menu, make changes
        to your menu items(add,remove,edit), and create customer loyalty
        programs all with ease.
        <br></br> <br></br>
        Say <bold> BYE </bold> to cleaning menus, reprinting menus for simple
        menu item changes, and not knowing how your menu items are selling.
        <br></br> <br></br>
        Say <bold> HI </bold> to a smart menu where you can track sales data and
        your patrons can use your custom filters.
      </p>
      <br></br> <br></br>
      <img src="https://cdn-icons-png.flaticon.com/512/706/706164.png" />
      <img src="https://cdn-icons.flaticon.com/png/512/737/premium/737967.png?token=exp=1658856277~hmac=c967f869e37d4cabbb62a988fbc6c4dd" />
      <img src="https://cdn-icons.flaticon.com/png/512/2515/premium/2515183.png?token=exp=1658856277~hmac=2b5d9b6ad4f2309e5ffb59003568422a" />
      <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" />
      <img src="https://cdn-icons.flaticon.com/png/512/2276/premium/2276931.png?token=exp=1658856277~hmac=d041fa98a550d4d5463cb88654431f58" />
      <img src="https://cdn-icons.flaticon.com/png/512/561/premium/561611.png?token=exp=1658856277~hmac=e3f9fdb29581e7c0cd8b20dcd6bc0565" />
      <img src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png" />
      <img src="https://cdn-icons-png.flaticon.com/512/2718/2718224.png" />
      <div>
        <Link to="/contact">
          <button> Contact us </button>
        </Link>
      </div>
    </div>
  );
};

export default Features;
