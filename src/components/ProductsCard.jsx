


































import { MdOutlineShoppingCart } from "react-icons/md";
import { MdStar, MdStarBorder } from "react-icons/md";

function ProductsCard({ product }) {
  const totalStars = 5;
  const filledStars = Math.floor(product.rating);
  const emptyStars = totalStars - filledStars;

  return (  
  <div className="p-4 cursor-pointer h-full">
    <div 
      key={product.id} 
      className="border rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white h-full flex flex-col"
    >
  
      <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
          src={product.image}  
          alt={product.title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
            e.target.alt = 'Image not available';
          }}
        />
      </div>
      
  
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2 hover:text-blue-600 transition-colors duration-200">
          {product.title}
        </h3>
        
        
        <div className="flex justify-center items-center mb-3">
          {[...Array(filledStars)].map((_, i) => (
            <MdStar key={i} className="text-yellow-500 text-lg" />
          ))}
          {[...Array(emptyStars)].map((_, i) => (
            <MdStarBorder key={i + filledStars} className="text-gray-300 text-lg" />
          ))}
        </div>

     
        <div className="flex-1 mb-4">
          <p className="text-gray-600 text-sm line-clamp-3">
            {product.description}
          </p>
        </div>
        
      
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <h4 className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors duration-200">
            ${product.price} 
          </h4>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-all duration-200 transform hover:scale-110">
            <MdOutlineShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductsCard;