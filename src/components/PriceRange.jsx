// Updated PriceRange component with mobile support
function PriceRange({ priceRange, initPriceRange, setPriceRange, isMobile }) {
  const handleChange = (type, value) => {
    setPriceRange({
      ...priceRange,
      [type]: parseInt(value),
      isApplied: true
    });
  };

  const resetPrice = () => {
    setPriceRange(initPriceRange);
  };

  return (
    <div className={isMobile ? 'p-2' : ''}>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className={`font-medium ${isMobile ? 'text-lg' : 'text-sm'}`}>
            Price Range: Rs.{priceRange.min} - Rs.{priceRange.max}
          </span>
          {priceRange.isApplied && (
            <button
              onClick={resetPrice}
              className={`text-amber-600 hover:text-amber-700 ${
                isMobile ? 'text-base' : 'text-sm'
              }`}
            >
              Reset
            </button>
          )}
        </div>
        
        <div className={`flex items-center gap-4 ${isMobile ? 'py-2' : 'py-1'}`}>
          <div className="flex-1">
            <input
              type="range"
              min={initPriceRange.min}
              max={initPriceRange.max}
              value={priceRange.min}
              onChange={(e) => handleChange('min', e.target.value)}
              className={`w-full ${isMobile ? 'h-3' : 'h-2'} bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg`}
            />
          </div>
          <div className="flex-1">
            <input
              type="range"
              min={initPriceRange.min}
              max={initPriceRange.max}
              value={priceRange.max}
              onChange={(e) => handleChange('max', e.target.value)}
              className={`w-full ${isMobile ? 'h-3' : 'h-2'} bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg`}
            />
          </div>
        </div>
        
        <div className="flex justify-between text-gray-500 text-sm mt-2">
          <span>Rs.{initPriceRange.min}</span>
          <span>Rs.{initPriceRange.max}</span>
        </div>
      </div>
    </div>
  );
}
export default PriceRange