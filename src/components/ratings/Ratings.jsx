import React, { useState } from "react";

const Ratings = ({ defaultRating = 1, isEditable = false, onRatingChange }) => {
  const [rating, setRating] = useState(defaultRating);
  return (
    <div className={`rating ${!isEditable && "pointer-events-none"}`}>
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name="rating"
          className="mask mask-star-2 bg-orange-400"
          checked={rating === value}
          onChange={() => {
            setRating(value);
            onRatingChange(value);
          }}
        />
      ))}
    </div>
  );
};

export default Ratings;
