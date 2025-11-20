

import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ products }) => {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;


