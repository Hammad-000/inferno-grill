import React, { useState } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Error from "./pages/Error";  
import Contact from "./pages/Contact";
import ProductDetailpg from "./pages/ProductDetailpg";
import Cart from "./pages/Cart";
import { CartProvider, useCart } from "./components/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <CartProvider>
      <Router>

        <nav className="navbar p-4 bg-gray-800">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
   
              <div className="flex items-center">
                <NavLink to="/" onClick={closeMenu}>
                  <img 
                    src="/public/images/logo2.jfif" 
                    alt="Logo" 
                    className="w-10 h-10 rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/40/374151/FFFFFF?text=Logo";
                    }}
                  />
                </NavLink>
                <span className="ml-3 text-white font-bold text-xl hidden sm:block">
                  ShopNow
                </span>
              </div>

              <div className="hidden md:flex flex-1 justify-center">
                <ul className="flex space-x-6">
                  <li>
                    <NavLink 
                      to="/" 
                      className={({ isActive }) => 
                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-gray-900 text-yellow-500' 
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/menu" 
                      className={({ isActive }) => 
                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-gray-900 text-yellow-500' 
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      Menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/about" 
                      className={({ isActive }) => 
                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-gray-900 text-yellow-500' 
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/Contact" 
                      className={({ isActive }) => 
                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-gray-900 text-yellow-500' 
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>


              <div className="flex items-center space-x-4">
                {/* Cart Icon */}
                <div className="relative">
                  <CartIcon />
                </div>

           
                <button
                  onClick={toggleMenu}
                  className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <IoClose className="block h-6 w-6" />
                  ) : (
                    <GiHamburgerMenu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

      
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-4 border-t border-gray-700">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-gray-900 text-yellow-500' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/menu" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-gray-900 text-yellow-500' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`
                  }
                  onClick={closeMenu}
                >
                  Menu
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-gray-900 text-yellow-500' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

      
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetailpg />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;