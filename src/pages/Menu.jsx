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
import Footer from "../components/footer";
// import { CartContext } from "../components/CartContext";

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

  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);  
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content - No duplicate navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <SearchBox onSearchChange={handleSearchChange} /> 
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Filters Section */}
          <div
            className={`${
              isFilterOpen ? "block" : "hidden"
            } lg:block lg:col-span-1 border border-gray-300 p-4 bg-white rounded-lg shadow-sm`}
          >
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

          <div className="lg:col-span-4">
            <Products products={filterProducts} />
          </div>
        </div>
      </div>


        <Footer />



    </div>
  );
}

export default Menu;