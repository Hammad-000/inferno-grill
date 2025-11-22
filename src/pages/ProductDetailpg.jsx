import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products'; // Ensure the correct path for products data




function ProductDetailpg() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
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

  if (!product) {
    return <div>Product not found</div>;  
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-120 object-cover rounded-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg mt-2">{product.description}</p>
          <span className="block mt-4 text-xl font-bold">${product.price}</span>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default ProductDetailpg;
