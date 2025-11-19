import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Error from "./pages/Error";  
import ProductDetailpg from "./pages/ProductDetailpg";
import Cart from "./pages/Cart";
import { CartProvider } from "./components/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
     <CartProvider>
    <Router>
      {/* Navbar */}
      <div className="navbar p-3 flex justify-center bg-black">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'text-yellow-500 font-semibold' : 'text-white'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/menu" 
                className={({ isActive }) => isActive ? 'text-yellow-500 font-semibold' : 'text-white'}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'text-yellow-500 font-semibold' : 'text-white'}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/productDetailpg" 
                className={({ isActive }) => isActive ? 'text-yellow-500 font-semibold' : 'text-white'}
              >
                Product Details
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cart" 
                className={({ isActive }) => isActive ? 'text-yellow-500 font-semibold' : 'text-white'}
                
              >
                 <MdOutlineShoppingCart className="text-xl" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        {/* Dynamic route for product details */}
        <Route path="/productDetail/:id" element={<ProductDetailpg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>
     </CartProvider>
  );
}

export default App;
