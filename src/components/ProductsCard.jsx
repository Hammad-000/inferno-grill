import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../components/CartContext"; 
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Star Rating Component
const StarRating = ({ rating, size = 16 }) => {
  // If rating is an object (like from fake store API)
  const rate = typeof rating === 'object' ? rating?.rate || 0 : rating || 0;
  const count = typeof rating === 'object' ? rating?.count || 0 : null;

  // Create array for stars
  const stars = [];
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} size={size} className="text-yellow-500" />);
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" size={size} className="text-yellow-500" />);
  }

  // Add empty stars to make 5 total
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} size={size} className="text-gray-300" />);
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {stars}
      </div>
      <span className="text-gray-600 text-sm font-medium ml-1">
        {rate.toFixed(1)}
      </span>
      {count !== null && (
        <span className="text-gray-400 text-xs ml-1">
          ({count} {count === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
};

function ProductsCard({ product }) {
  const { addToCart } = useCart();  
  const navigate = useNavigate(); 

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart(product); 
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className="p-4 cursor-pointer h-full"
      onClick={handleCardClick}
    >
      <div
        key={product.id}
        className="border rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white h-full flex flex-col"
      >
        <div className="relative w-full h-48 overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            src={product.image}
            alt={product.title}
            onError={(e) => {
              console.log(`Image failed to load: ${product.image}`);
              e.target.src = "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Image+Not+Found";
              e.target.alt = "Image not available";
            }}
            onLoad={() => console.log(`Image loaded: ${product.image}`)}
          />
        </div>

        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2 hover:text-blue-600 transition-colors duration-200">
            {product.title}
          </h3>

          <div className="flex-1 mb-3">
            <p className="text-gray-600 text-sm line-clamp-3">
              {product.description}
            </p>
          </div>


          <div className="mb-4">
            <StarRating rating={product.rating} size={23} />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
            <div>
              <h4 className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors duration-200">
                {product.price}
              </h4>
              {product.originalPrice && (
                <p className="text-sm text-gray-500 line-through">
                  {product.originalPrice}
                </p>
              )}
            </div>
            <button
              onClick={handleAddToCart}  
              className="p-3 gap-2 border flex rounded-full bg-amber-50  hover:bg-gradient-to-br   from-red-400 to-orange-400 hover:text-white transition-all duration-300 transform hover:scale-110 ease-in-out cursor-pointer "
            >
              <p>Order Now</p>
              <GiMeal className="text-2xl" /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;