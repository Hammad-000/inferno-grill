import React from "react";

const PriceRange = ({ priceRange, initPriceRange, setInitPriceRange }) => {

  const handleMaxPriceChange = (e) => {
    setInitPriceRange((prevState) => ({
      ...prevState, 
      max: parseInt(e.target.value),
      isApplied: true,
    }));
  };

  const handleMinPriceChange = (e) => {
    setInitPriceRange((prevState) => ({
      ...prevState, 
      min: parseInt(e.target.value),
      isApplied: true,
    }));
  };

  return (
    <div className="my-4">
      <label className="block text-sm font-semibold">Price Range</label>
      
      
      <div className="mb-4">
        <label className="block text-xs text-gray-600 mb-1">Min Price: ${initPriceRange.min}</label>
        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          value={initPriceRange.min}
          onChange={handleMinPriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>${priceRange.min}</span>
          <span>${priceRange.max}</span>
        </div>
      </div>

      
      <div>
        <label className="block text-xs text-gray-600 mb-1">Max Price: ${initPriceRange.max}</label>
        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          value={initPriceRange.max}
          onChange={handleMaxPriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>${priceRange.min}</span>
          <span>${priceRange.max}</span>
        </div>
      </div>

      {/* Display current range */}
      <div className="mt-2 text-center text-sm font-medium">
        Selected: ${initPriceRange.min} - ${initPriceRange.max}
      </div>
    </div>
  );
};

export default PriceRange; // Only default export