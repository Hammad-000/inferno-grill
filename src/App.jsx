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
import { FaFire, FaHome, FaUtensils, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import { supabase } from "../"




function CartIcon() {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  const [isHovering, setIsHovering] = useState(false);

  // Calculate total price for tooltip
  const totalPrice = cart.reduce((total, item) => {
    const price = typeof item.price === 'number' ? item.price : 0;
    const quantity = item.quantity || 1;
    return total + (price * quantity);
  }, 0);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <NavLink 
        to="/cart" 
        className={({ isActive }) => 
          `relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
            isActive 
              ? 'bg-gradient-to-br from-yellow-500 to-orange-600 text-white shadow-lg ring-2 ring-yellow-400' 
              : 'bg-gray-800 text-gray-300 hover:bg-gradient-to-br hover:from-yellow-600 hover:to-red-600 hover:text-white hover:shadow-xl'
          }`
        }
      >
        <MdOutlineShoppingCart className="text-xl" />
        
        {/* Cart badge */}
        {cartItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
            {cartItemsCount > 9 ? '9+' : cartItemsCount}
          </span>
        )}
      </NavLink>

      {/* Tooltip */}
      {isHovering && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white text-gray-800 text-sm rounded-xl shadow-2xl z-50 overflow-hidden border ">
          <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50">
            <div className="font-bold text-gray-900 flex items-center">
              <MdOutlineShoppingCart className="mr-2" />
              Your Cart
            </div>
          </div>
          
          {cart.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              <p>Your cart is empty</p>
              <p className="text-xs mt-1">Add items to get started</p>
            </div>
          ) : (
            <div className="p-3">
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {cart.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-gray-700">{item.quantity || 1}x</span>
                      </div>
                      <span className="text-xs font-medium truncate max-w-[120px]">{item.title}</span>
                    </div>
                    <span className="text-xs font-bold text-gray-900">
                      ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </div>
                ))}
                
                {cart.length > 3 && (
                  <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-100">
                    +{cart.length - 3} more items
                  </div>
                )}
              </div>
              
              <div className="mt-3 pt-3 border border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total:</span>
                  <span className="text-lg font-bold text-green-600">${totalPrice.toFixed(2)}</span>
                </div>
                <NavLink 
                  to="/cart"
                  className="block w-full mt-3 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-center rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
                >
                  View Cart
                </NavLink>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/menu", label: "Menu", icon: FaUtensils },
    { path: "/about", label: "About", icon: FaInfoCircle },
    { path: "/contact", label: "Contact", icon: FaEnvelope },
    { path: "/login", label: "Login", icon: FaEnvelope },
    { path: "/signup", label: "Signup", icon: FaEnvelope },
  ];

  return (
    <CartProvider>
      <Router>
        {/* Navbar */}
        <nav 
          className={`navbar sticky top-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl py-3 backdrop-blur-sm' 
              : 'bg-gradient-to-r from-red-800 via-red-900 to-gray-900 py-4'
          }`}
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => setIsNavHovered(false)}
        >
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex justify-between items-center">
              
              {/* Logo/Brand */}
              <div className="flex items-center space-x-3">
                <NavLink 
                  to="/" 
                  onClick={closeMenu}
                  className="flex items-center space-x-3 group"
                >
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full ${
                      isNavHovered 
                        ? 'bg-gradient-to-r from-red-600  to-yellow-500' 
                        : 'bg-gradient-to-r from-yellow-500 to-red-600'
                    } flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ring-2 ring-yellow-500/30`}>
                      <FaFire className="text-2xl text-white" />
                    </div>
                    <div className={`absolute -inset-1 rounded-full ${
                      isNavHovered 
                        ? 'bg-gradient-to-r from-red-600 to-yellow-500 opacity-30 blur-lg' 
                        : 'bg-gradient-to-r from-yellow-500 to-red-600 opacity-20 blur-sm'
                    } group-hover:opacity-30 transition-all duration-500`} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-white font-bold text-2xl lg:text-3xl tracking-tight leading-tight transition-all duration-300 ${
                      isNavHovered ? 'drop-shadow-[0_0_15px_rgba(255,100,0,0.7)]' : ''
                    }`}>
                      Inferno<span className="text-yellow-400">Grill</span>
                    </span>
                    <span className="text-yellow-300 text-xs font-medium tracking-wider hidden sm:block">
                      FLAME-GRILLED PERFECTION
                    </span>
                  </div>
                </NavLink>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-1 justify-center">
                <ul className="flex items-center space-x-1">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <NavLink 
                        to={item.path} 
                        className={({ isActive }) => 
                          `relative px-6 py-3 mx-1 rounded text-sm font-bold transition-all duration-300 group flex items-center gap-3 overflow-hidden ${
                            isActive 
                              ? '  absolute bottom-0 left-0  text-white bg-orange-600  group-hover:w-full transition-all duration-500 group-hover:delay-100 rounded' 
                              : 'text-gray-200 hover:text-white hover:shadow-md'
                          }`
                        }
                        onClick={closeMenu}
                      >
                     
                    
                        
                   
                        {isNavHovered && (
                          <div className="absolute -left-2 opacity-0 group-hover:opacity-100 group-hover:left-2 transition-all duration-500 delay-100">
                            <FaFire className=" text-m" />
                          </div>
                        )}
                        
                      
                     
                        
                        <span className="relative z-10 transition-all duration-300 group-hover:font-bold">
                          {item.label}
                        </span>
                        
                        {/* Fire trail underline */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-red-400 group-hover:w-full transition-all duration-500 group-hover:delay-100 rounded" />
                      </NavLink>
                    </li>
                  ))}
                </ul>         
              </div>
          

              {/* Right Side Icons */}
              <div className="flex items-center space-x-4">
                {/* Cart Icon */}
                <CartIcon />

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMenu}
                  className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-xl ${
                    isNavHovered 
                      ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500' 
                      : 'bg-gradient-to-r from-yellow-600 to-red-600'
                  } text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ring-2 ring-yellow-500/30`}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <IoClose className="text-2xl" />
                  ) : (
                    <GiHamburgerMenu className="text-2xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 py-4 px-2">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      `relative flex items-center px-4 py-4 mx-2 my-1 rounded-xl text-base font-medium transition-all duration-300 overflow-hidden group ${
                        isActive 
                          ? 'bg-gradient-to-r from-yellow-600 to-red-600 text-white shadow-lg' 
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`
                    }
                    onClick={closeMenu}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Fire icon for mobile */}
                    <div className="absolute left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaFire className="text-yellow-400 text-xs" />
                    </div>
                    
                    <item.icon className={`ml-3 transition-all duration-300 ${
                      isNavHovered ? 'group-hover:scale-125 group-hover:text-yellow-300' : ''
                    }`} />
                    <span className="ml-3 relative z-10">{item.label}</span>
                    
                    {/* Mobile hover effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-red-500 group-hover:w-full transition-all duration-300 rounded-full" />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Fire Particles (without keyframes) */}
       
{isNavHovered && (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <div 
        key={i}
        className="absolute w-1 h-1 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full opacity-0 animate-bounce"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.2}s`,
          animationDuration: '1.5s',
          animationIterationCount: 'infinite'
        }}
      />
    ))}
    {[...Array(4)].map((_, i) => (
      <div 
        key={`spark-${i}`}
        className="absolute w-0.5 h-0.5 bg-yellow-300 rounded-full opacity-0 animate-ping"
        style={{
          left: `${15 + (i * 20)}%`,
          animationDelay: `${i * 0.3}s`,
        }}
      />
    ))}
  </div>
)}
        </nav>

        {/* Main Content */}
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetailpg />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </div>

      </Router>
    </CartProvider>
  );
}

export default App;