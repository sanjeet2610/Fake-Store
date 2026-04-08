import { useState } from "react";
import Ratings from "../../../components/ratings/Ratings";

const FilterBar = () => {
  const [filters, setFilters] = useState({
    price: 5000,
    rating: 4,
  });

  // handle all input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilter = () => {
    setFilters({
      price: "",
      rating: "",
    });
  };
  return (
    <div className="border-r border-r-white/10 min-h-screen basis-70 p-5 font-light">
      {/* Asending and Desending Filter */}
      <div className="flex flex-col gap-1 ">
        <label className="flex items-center gap-2 justify-between">
          Asending
          <input
            type="radio"
            name="radio-4"
            className="radio radio-primary w-5 h-5"
            defaultChecked
          />
        </label>
        <label className="flex items-center gap-2 justify-between">
          Desending
          <input
            type="radio"
            name="radio-4"
            className="radio radio-primary w-5 h-5"
          />
        </label>
      </div>

      <div className="h-px w-full bg-white/20 my-6"></div>

      {/* Out Of Stock and Fast Delivery Filter */}
      <div className="flex flex-col gap-1 my-6">
        <label className="flex items-center gap-2 justify-between">
          Include Out Of Stock
          <input
            type="checkbox"
            className="checkbox checkbox-primary h-5 w-5"
          />
        </label>
        <label className="flex items-center gap-2 justify-between">
          Fast Delivery Only
          <input
            type="checkbox"
            className="checkbox checkbox-primary h-5 w-5"
          />
        </label>
      </div>

      {/* Ratings */}
      <Ratings
        defaultRating={filters.rating}
        isEditable={true}
        onRatingChange={(rating) => setFilters((prev) => ({ ...prev, rating }))}
      />

      {/* price range */}
      <div className="my-6 flex flex-col gap-3">
        <p>
          Price :<strong> {filters.price} </strong>Rs
        </p>
        <input
          type="range"
          min={100}
          max={5000}
          name="price"
          value={filters.price}
          className="range range-primary"
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      {/* clear filters */}
      <button onClick={clearFilter} className="btn btn-soft btn-info w-full">
        Clear Filters
      </button>
    </div>
  );
};

export default FilterBar;
