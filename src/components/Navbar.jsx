import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaHome, FaUtensils, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import NavigationLink from './NavigationLink'; // Correct import path

function Navbar() {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const location = useLocation();

  // Navigation Items
  const navItems = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/menu", label: "Menu", icon: FaUtensils },
    { path: "/about", label: "About", icon: FaInfoCircle },
    { path: "/contact", label: "Contact", icon: FaEnvelope }
  ];

  return (
    <nav className="navbar bg-amber-900">
      <div className="container mx-auto">
      
        <div className="flex justify-center">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavigationLink 
                  item={item} 
                  isNavHovered={isNavHovered}
                  closeMenu={() => {}}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
