import React, { useState } from "react";
import { data } from "./ratingData";
import ThankYou from "./ThankYou";
import "./FourmPage.css";

export default function ForumPage({ page, setPage, rating, setRating }) {
  console.log(rating);
  return (
    <div>
      <div className="background-color-thankyou-page">
        <div className="main-content-container">
          <div className="content-items">
            <div className="star-container">
              <img src={data.img[0].star} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
            <div className="rating-container">
              {data.ratings.map((ratings, index) => {
                return (
                  <button
                    className={
                      rating === index + 1 ? "selected" : "not-selected"
                    }
                    onClick={() => setRating(index + 1)}
                  >
                    {ratings.rating}
                  </button>
                );
              })}
            </div>
            <div className="submit-button-container">
              <button disabled={rating < 1} onClick={() => setPage(true)}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
