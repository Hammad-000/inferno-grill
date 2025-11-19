import React from "react";

function ProductDetailpg() {
  return (
    <div className="flex justify-center p-5  border">
      <h2>Burger</h2>
      <button><p>Action Button</p></button>
      <img   src="/images/slideimg3.jfif" alt="Product Image" /> {/* Corrected image path */}


      <button><p>Another Action</p></button>
    </div>
  );
}

export default ProductDetailpg;
