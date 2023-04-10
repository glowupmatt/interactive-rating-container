import React, { useState } from "react";
import ThankYou from "./ThankYou";
import ForumPage from "./ForumPage";
import { data } from "./ratingData";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(false);

  return (
    <div className="App">
      {page === false ? (
        <ForumPage
          page={page}
          setPage={setPage}
          rating={rating}
          setRating={setRating}
        />
      ) : (
        <ThankYou rating={rating} setRating={setRating} />
      )}
    </div>
  );
}

export default App;
