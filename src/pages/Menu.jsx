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

  
  const filterProducts = useMemo(() => {
    let visibleProducts = getVisibleProducts(
      selectedCategories,
      selectedRating,
      priceRange,
      searchTerm
    );

  
    if (sorting === "price") {
      visibleProducts = [...visibleProducts].sort((a, b) => a.price - b.price);
    } else if (sorting === "rating") {
      visibleProducts = [...visibleProducts].sort((a, b) => a.rating - b.rating);
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4 flex-col lg:flex-row">
          
          <div className="min-w-2/6 lg:w-auto mb-4 lg:mb-0 flex justify-between lg:gap-2">
            <SearchBox onSearchChange={handleSearchChange} className="w-full lg:w-auto" /> 
            <SortingFilter handleSorting={handleSorting} className="w-full lg:w-auto" />
          </div>

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
            <Products products={filterProducts} /> {/* Display filtered and sorted products */}
          </div>
        </div>
      </div>

      <FooterContent />
    </div>
  );
}

export default Menu;
