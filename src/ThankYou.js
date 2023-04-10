import React from "react";
import "./ThankYou.css";

export default function ThankYou({ rating, setRating }) {
  return (
    <div className="background-color-thankyou-page">
      <div className="main-content-container">
        <img src="/illustration-thank-you.svg" />
        <div className="selected-container">
          <p>You selected {rating} out of 5</p>
        </div>
        <div className="thankyou-container">
          <h2>ThankYou!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}
