import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Error from "./pages/Error";  
import ProductDetailpg from "./pages/ProductDetailpg";
import Cart from "./pages/Cart";
import { CartProvider, useCart } from "./components/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";


// Cart Icon Component with counter
function CartIcon() {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <NavLink 
        to="/cart" 
        className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}
      >
        <MdOutlineShoppingCart className="text-2xl" />
      </NavLink>
      {cartItemsCount > 0 && (
        <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartItemsCount}
        </span>
      )}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
    
        <nav className="navbar p-4 flex justify-between bg-gray-800 items-center ">
      
          <div>  <li>
            
                <img  to="/menu" className="w-10 rounded" src="/public/images/logo2.jfif" alt="" />
              </li></div>
          <nav className="flex-1 flex justify-center">
            <ul className="flex space-x-6">
            
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? 'text-yellow-500 font-semibold' : 'text-white hover:text-yellow-400 transition-colors'}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/menu" 
                  className={({ isActive }) => isActive ? 'text-yellow-500 font-semibold' : 'text-white hover:text-yellow-400 transition-colors'}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? 'text-yellow-500 font-semibold' : 'text-white hover:text-yellow-400 transition-colors'}
                >
                  About
                </NavLink>
              </li>
              <li>
                {/* <NavLink 
                  to="/productDetail" 
                  className={({ isActive }) => isActive ? 'text-yellow-500 font-semibold' : 'text-white hover:text-yellow-400 transition-colors'}
                >
                  Product Detail
                </NavLink> */}
              </li>

            </ul>
          </nav>

          <div className="flex items-center">
            <CartIcon />
          </div>
     
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
           <Route path="/productDetail/:id" element={<ProductDetailpg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;