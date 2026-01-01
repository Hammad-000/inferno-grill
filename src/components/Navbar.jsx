import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaUtensils, FaInfoCircle, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useCart } from './CartContext';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState(location.pathname);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  // Update active path when location changes
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  // Navigation Items
  const navItems = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/menu", label: "Menu", icon: FaUtensils },
    { path: "/about", label: "About", icon: FaInfoCircle },
    { path: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  const handleLogout = async () => {
    try {
      logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(true);
  };

  return (
    <>
      <nav className="navbar sticky top-0 z-50 bg-gradient-to-r from-amber-700 to-amber-600 p-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group" 
              onClick={() => navigate("/")}
            >
              <div className="bg-white p-2 rounded-full group-hover:rotate-12 transition-transform duration-300">
                <FaUtensils className="text-amber-700 text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  Inferno<span className="text-amber-200">Grill</span>
                </h1>
                {user && (
                  <p className="text-xs text-amber-100 mt-1">
                    Welcome, {user.name || user.email}
                  </p>
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activePath === item.path;
                
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`
                      flex items-center space-x-2 px-4 py-3 rounded-lg font-semibold 
                      transition-all duration-300 transform hover:scale-105
                      ${isActive 
                        ? 'bg-white text-amber-700 shadow-md' 
                        : 'text-amber-100 hover:bg-amber-800 hover:text-white'
                      }
                    `}
                  >
                    <Icon className="text-lg" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              {/* Cart with badge */}
              <div className="relative ml-4">
                <button
                  onClick={() => navigate("/cart")}
                  className={`
                    flex items-center space-x-2 px-4 py-3 rounded-lg font-semibold
                    transition-all duration-300 transform hover:scale-105
                    ${activePath === "/cart"
                      ? 'bg-white text-amber-700 shadow-md' 
                      : 'text-amber-100 hover:bg-amber-800 hover:text-white'
                    }
                  `}
                >
                  <FaShoppingCart className="text-lg" />
                  <span>Cart</span>
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold 
                           rounded-full h-6 w-6 flex items-center justify-center 
                           animate-pulse shadow-lg">
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                  )}
                </button>
              </div>

              {/* Logout Button */}
              <button
                onClick={confirmLogout}
                className="flex items-center space-x-2 px-4 py-3 rounded-lg font-semibold 
                         text-amber-100 hover:bg-red-600 hover:text-white 
                         transition-all duration-300 transform hover:scale-105 ml-4"
              >
                <BiLogOut className="text-xl" />
                <span>Logout</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white text-2xl hover:text-amber-200 transition-colors">
              ☰
            </button>
          </div>

          {/* Mobile Navigation (Fixed - no isCart error) */}
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePath === item.path;
              
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-white text-amber-700 shadow-md' 
                      : 'text-amber-100 hover:bg-amber-800 hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="text-lg" />
                    <span>{item.label}</span>
                  </div>
                </button>
              );
            })}
            
            {/* Cart in Mobile Menu */}
            <button
              onClick={() => navigate("/cart")}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold
                transition-all duration-300
                ${activePath === "/cart"
                  ? 'bg-white text-amber-700 shadow-md' 
                  : 'text-amber-100 hover:bg-amber-800 hover:text-white'
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <FaShoppingCart className="text-lg" />
                <span>Cart</span>
              </div>
              {totalItems > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold 
                       rounded-full h-6 w-6 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
            
            {/* Logout in Mobile Menu */}
            <button
              onClick={confirmLogout}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold
                transition-all duration-300
                ${activePath === "/logout"
                  ? 'bg-white text-amber-700 shadow-md' 
                  : 'text-amber-100 hover:bg-amber-800 hover:text-white'
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <BiLogOut className="text-lg" />
                <span>Logout</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl animate-fadeIn">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BiLogOut className="text-3xl text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Confirm Logout
              </h3>
              <p className="text-gray-600">
                Are you sure you want to logout?
              </p>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <BiLogOut />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;