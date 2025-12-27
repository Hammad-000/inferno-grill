import { useState, useMemo } from "react";
import CategoryFilter from "../components/CategoryFilter";
import Products from "../components/Products";
import { getVisibleProducts } from "../../src/data/product-filter";
import RatingFilter from "../components/RatingFilter";
import PriceRange from "../components/PriceRange";
import SearchBox from "../components/SearchBox"; 
import { AiOutlineMenu, AiOutlineFilter } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";
import { products } from "../../src/data/products";
import FooterContent from "../components/FooterContent";
import SortingFilter from "../components/SortingFilter";

const initPriceFilter = {
  min: Math.min(...products.map(product => product.price)),
  max: Math.max(...products.map(product => product.price)),
  isApplied: false,
};

function Menu() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [priceRange, setPriceRange] = useState(initPriceFilter);
  const [isFilterOpen, setIsFilterOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");
  const [sorting, setSorting] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filterProducts = useMemo(() => {
    let visibleProducts = getVisibleProducts(
      selectedCategories,
      selectedRating,
      priceRange,
      searchTerm
    );

    if (sorting === "price-low") {
      visibleProducts = [...visibleProducts].sort((a, b) => a.price - b.price);
    } else if (sorting === "price-high") {
      visibleProducts = [...visibleProducts].sort((a, b) => b.price - a.price);
    } else if (sorting === "rating") {
      visibleProducts = [...visibleProducts].sort((a, b) => b.rating - a.rating);
    } else if (sorting === "popular") {
      visibleProducts = [...visibleProducts].sort((a, b) => b.popular - a.popular);
    }

    return visibleProducts;
  }, [selectedCategories, selectedRating, priceRange, searchTerm, sorting]);

  const onChangeCategoryHandler = (category, isChecked) => {
    setSelectedCategories(prevState => 
      isChecked
        ? [...prevState, category]
        : prevState.filter((cat) => cat !== category)
    );
  };

  const onChangeRatingHandler = (rating) => {
    setSelectedRating(rating);
  };

  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);  
  };

  const handleSorting = (sort) => {
    setSorting(sort);
    setIsSortOpen(false);
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedRating("");
    setPriceRange(initPriceFilter);
    setSearchTerm("");
    setSorting("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 bg-white shadow-md lg:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Menu</h1>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FaSortAmountDown />
                <span className="text-sm font-medium">Sort</span>
              </button>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <AiOutlineFilter />
                <span className="text-sm font-medium">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-gray-800">Our Menu</h1>
            <span className="text-gray-500 text-lg">
              {filterProducts.length} items available
            </span>
          </div>
          <div className="flex items-center pt-8 gap-6">
            <SearchBox onSearchChange={handleSearchChange} />
            <SortingFilter handleSorting={handleSorting} currentSort={sorting} />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden mb-6">
          <SearchBox onSearchChange={handleSearchChange} />
        </div>

        {/* Mobile Sorting Dropdown */}
        {isSortOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsSortOpen(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[70vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Sort By</h3>
                  <button
                    onClick={() => setIsSortOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <IoCloseCircleOutline size={24} />
                  </button>
                </div>
                <div className="space-y-2">
                  {[
                    { value: "", label: "Default", icon: "🔄" },
                    { value: "price-low", label: "Price: Low to High", icon: "💰" },
                    { value: "price-high", label: "Price: High to Low", icon: "💰" },
                    { value: "rating", label: "Highest Rated", icon: "⭐" },
                    { value: "popular", label: "Most Popular", icon: "🔥" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSorting(option.value)}
                      className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all ${
                        sorting === option.value
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                          : "hover:bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      <span className="text-xl">{option.icon}</span>
                      <span className="font-medium">{option.label}</span>
                      {sorting === option.value && (
                        <span className="ml-auto">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Filter Overlay */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsFilterOpen(false)}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto">
              <div className="min-h-screen pb-20">
                {/* Sticky Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                  <div className="flex justify-between items-center p-4">
                    <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="text-gray-500 hover:text-gray-700 p-2"
                    >
                      <IoCloseCircleOutline size={28} />
                    </button>
                  </div>
                </div>

                {/* Filter Content */}
                <div className="p-4 space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
                    <CategoryFilter
                      selectedCategories={selectedCategories}
                      onChangeCategory={onChangeCategoryHandler}
                      isMobile={true}
                    />
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h3>
                    <PriceRange
                      priceRange={priceRange}
                      initPriceRange={initPriceFilter}
                      setPriceRange={handlePriceRangeChange}
                      isMobile={true}
                    />
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Rating</h3>
                    <RatingFilter
                      onChangeRating={onChangeRatingHandler}
                      selectedRating={selectedRating}
                      isMobile={true}
                    />
                  </div>

                  {/* Active Filters Summary */}
                  {(selectedCategories.length > 0 || selectedRating || priceRange.isApplied) && (
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-5">
                      <h3 className="font-semibold text-gray-800 mb-3">Active Filters</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategories.map((cat) => (
                          <span key={cat} className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm">
                            {cat}
                          </span>
                        ))}
                        {selectedRating && (
                          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                            {selectedRating}★ & up
                          </span>
                        )}
                        {priceRange.isApplied && (
                          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                            Rs.{priceRange.min}-{priceRange.max}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sticky Footer */}
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
                <div className="flex gap-3">
                  <button
                    onClick={clearAllFilters}
                    className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-xl hover:shadow-lg transition-all shadow-md"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-800">Filters</h2>
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Clear all
                  </button>
                </div>

                <div className="space-y-8">
                  <CategoryFilter
                    selectedCategories={selectedCategories}
                    onChangeCategory={onChangeCategoryHandler}
                  />

                  <PriceRange
                    priceRange={priceRange}
                    initPriceRange={initPriceFilter}
                    setPriceRange={handlePriceRangeChange}
                  />

                  <RatingFilter
                    onChangeRating={onChangeRatingHandler}
                    selectedRating={selectedRating}
                  />
                </div>
              </div>

              {/* Active Filters Summary */}
              {(selectedCategories.length > 0 || selectedRating || priceRange.isApplied) && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-5">
                  <h3 className="font-semibold text-gray-800 mb-3">Active Filters</h3>
                  <div className="space-y-2">
                    {selectedCategories.length > 0 && (
                      <div className="text-sm text-gray-700">
                        Categories: <span className="font-medium">{selectedCategories.join(", ")}</span>
                      </div>
                    )}
                    {selectedRating && (
                      <div className="text-sm text-gray-700">
                        Rating: <span className="font-medium">{selectedRating} stars & up</span>
                      </div>
                    )}
                    {priceRange.isApplied && (
                      <div className="text-sm text-gray-700">
                        Price: <span className="font-medium">Rs.{priceRange.min} - Rs.{priceRange.max}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Mobile Filter Summary */}
            <div className="lg:hidden mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCategories.length > 0 && selectedCategories.map((cat) => (
                  <span key={cat} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                    {cat}
                  </span>
                ))}
                {selectedRating && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {selectedRating}★ & up
                  </span>
                )}
                {priceRange.isApplied && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Rs.{priceRange.min}-{priceRange.max}
                  </span>
                )}
                {(selectedCategories.length > 0 || selectedRating || priceRange.isApplied) && (
                  <button
                    onClick={clearAllFilters}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
                  >
                    Clear all
                  </button>
                )}
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {filterProducts.length} {filterProducts.length === 1 ? 'Item' : 'Items'}
                </h2>
                <span className="text-sm text-gray-500">
                  {sorting ? `Sorted by: ${sorting.replace('-', ' ')}` : 'Default order'}
                </span>
              </div>
            </div>

            {/* Desktop Products Header */}
            <div className="hidden lg:flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">All Items</h2>
                <p className="text-gray-600 mt-1">
                  Showing {filterProducts.length} delicious items
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                  {selectedCategories.length > 0 ? `${selectedCategories.length} categories` : 'All categories'}
                </span>
                {selectedRating && (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {selectedRating}★ +
                  </span>
                )}
              </div>
            </div>

            {/* Products */}
            <Products products={filterProducts} />

            {/* No Results Message */}
            {filterProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🍕</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No items found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search term</p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <FooterContent />
    </div>
  );
}

export default Menu;