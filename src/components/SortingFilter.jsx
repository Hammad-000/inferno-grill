import React from "react";

function SortingFilter({ handleSorting }) {
  const handleSortChange = (event) => {
    handleSorting(event.target.value);
  };

  return (
    <div className="flex gap-4">
      <label>Sort by:</label>
      <select onChange={handleSortChange} className="p-5 h-6 border rounded">
        <option value="">Select</option>
        <option value="price">Price (Low to High)</option>
        <option value="rating">Rating (Low to High)</option>
      </select>
    </div>
  );
}

export default SortingFilter;
