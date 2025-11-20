import React from "react";

const PriceRange = ({ priceRange, initPriceRange, setPriceRange }) => {

  const handleMaxPriceChange = (e) => {
    setPriceRange((prevState) => ({
      ...prevState, 
      max: parseInt(e.target.value),
      isApplied: true,
    }));
  };

  const handleMinPriceChange = (e) => {
    setPriceRange((prevState) => ({
      ...prevState, 
      min: parseInt(e.target.value),
      isApplied: true,
    }));
  };

  // Reset to initial range if needed
  const handleReset = () => {
    setPriceRange({
      ...initPriceRange,
      isApplied: false,
    });
  };

  return (
    <div className="my-4">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-semibold">Price Range</label>
        {priceRange.isApplied && (
          <button 
            onClick={handleReset}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            Reset
          </button>
        )}
      </div>
      
      {/* Min Price Slider */}
      <div className="mb-4">
        <label className="block text-xs text-gray-600 mb-1">
          Min Price: ${priceRange.min}
        </label>
        <input
          type="range"
          min={initPriceRange.min}
          max={initPriceRange.max}
          value={priceRange.min}
          onChange={handleMinPriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>${initPriceRange.min}</span>
          <span>${initPriceRange.max}</span>
        </div>
      </div>

      {/* Max Price Slider */}
      <div>
        <label className="block text-xs text-gray-600 mb-1">
          Max Price: ${priceRange.max}
        </label>
        <input
          type="range"
          min={initPriceRange.min}
          max={initPriceRange.max}
          value={priceRange.max}
          onChange={handleMaxPriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>${initPriceRange.min}</span>
          <span>${initPriceRange.max}</span>
        </div>
      </div>

      {/* Display current range */}
      <div className="mt-2 text-center text-sm font-medium">
        Selected: ${priceRange.min} - ${priceRange.max}
        {priceRange.isApplied }
      </div>
    </div>
  );
};

export default PriceRange;