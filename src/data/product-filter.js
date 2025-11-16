import { products as DBProducts } from "./products";

export const getVisibleProducts = (
  selectedCategories,
  selectedRating,
  initPriceRange,
  searchTerm
) => {

  let products = DBProducts;

  
  if (selectedCategories.length > 0) {
    products = products.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  
  if (selectedRating) {
    products = products.filter((product) => product.rating >= selectedRating);
  }

 
  if (initPriceRange.isApplied) {
    products = products.filter(
      (product) =>
        product.price >= initPriceRange.min && product.price <= initPriceRange.max
    );
  }

 
  if (searchTerm) {
    const searchLower = searchTerm.toLowerCase();
    products = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) 
    );
  }

  return products;
};
