import { useState, useMemo } from "react";
import CategoryFilter from "../components/CategoryFilter";
import Products from "../components/Products";
import { getVisibleProducts } from "../../src/data/product-filter";
import RatingFilter from "../components/RatingFilter";
import PriceRange from "../components/PriceRange";
import SearchBox from "../components/SearchBox"; 
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import { products } from "../../src/data/products";
// import Cart from "../pages/Cart";

// Initialize price range from products
const initPriceFilter = {
  min: products.min,
  max: products.max,
  isApplied: false,
};

function Menu() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [priceRange, setPriceRange] = useState(initPriceFilter);
  const [isFilterOpen, setIsFilterOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");

  // Memoize filtered products to optimize performance
  const filterProducts = useMemo(() => {
    return getVisibleProducts(
      selectedCategories,
      selectedRating,
      priceRange,
      searchTerm
    );
  }, [selectedCategories, selectedRating, priceRange, searchTerm]);

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

  const handleSearchChange = (term) => {
    setSearchTerm(term);  
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header with Search and Filter Toggle */}
      <div className="flex justify-between items-center mb-4">
        <SearchBox onSearchChange={handleSearchChange} /> 

        {/* Filter Toggle Button for Mobile */}
        <button
          className="block lg:hidden p-2 border rounded-lg bg-gray-100 hover:bg-gray-200"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          aria-expanded={isFilterOpen}
        >
          {!isFilterOpen ? (
            <AiOutlineMenu size={24} />
          ) : (
            <IoCloseCircleOutline size={24} />
          )}
        </button>
      </div>

      {/* Main Content Grid: Filters on the Left, Products on the Right */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Filters Section */}
        <div
          className={`${
            isFilterOpen ? "block" : "hidden"
          } lg:block lg:col-span-1 border border-gray-300 p-4 bg-white rounded-lg shadow-sm`}
        >
          {/* Category Filter */}
          <CategoryFilter
            selectedCategories={selectedCategories}
            onChangeCategory={onChangeCategoryHandler}
          />

          {/* Price Range Filter */}
          <PriceRange
            priceRange={priceRange}
            initPriceRange={priceRange}
            setInitPriceRange={setPriceRange}
          />

          {/* Rating Filter */}
          <RatingFilter
            onChangeRating={onChangeRatingHandler}
            selectedRating={selectedRating}
          />
        </div>

        {/* Products Section */}
        <div className="lg:col-span-4">
          <Products products={filterProducts} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
