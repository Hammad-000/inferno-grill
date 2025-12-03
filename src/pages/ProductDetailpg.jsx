import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link
import { products } from '../data/products';
import { useCart } from '../components/CartContext'; // Import useCart

function ProductDetailpg() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const productId = parseInt(id);
        const selectedProduct = products.find(p => p.id === productId);
        setProduct(selectedProduct || null);
      } catch (error) {
        console.error('Error fetching product:', error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    // Create an array of products based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    // Optional: Show success message or notification
    console.log(`Added ${quantity} ${product.title}(s) to cart`);
    
    // Optional: Reset quantity to 1 after adding
    setQuantity(1);
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="text-2xl font-bold text-gray-600">Product not found</div>
        <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
          Return to Home
        </Link>
      </div>
    );  
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb - Fixed with Link components */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-500">Home</Link> 
          <span className="mx-2">/</span>
          <Link to="/menu" className="hover:text-blue-500">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-lg p-6">
          {/* Product Image */}
          <div className="lg:w-1/2 h-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          
          {/* Product Details */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-2xl font-bold text-amber-600 mb-6">${product.price}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {product.category && (
              <div className="mb-4">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg mb-4"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Additional Info */}
            <div className="border-t pt-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>✅ In Stock</span>
                <span>🚚 Free Delivery</span>
                <span>🔒 Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <Link 
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{relatedProduct.title}</h3>
                    <p className="text-amber-600 font-bold">${relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailpg;