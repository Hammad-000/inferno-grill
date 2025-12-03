import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../components/CartContext"; 
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";


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

          <div className="flex-1 mb-4">
            <p className="text-gray-600 text-sm line-clamp-3">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
            <h4 className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors duration-200">
              ${product.price}
            </h4>
            <button
              onClick={handleAddToCart}  
              className="p-3 gap-2 border flex rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-all duration-200 transform hover:scale-110"
            >
              <MdOutlineShoppingCart className="text-xl" /> <p>Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;