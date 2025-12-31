import React from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

function NavigationLink({ item, isNavHovered, closeMenu }) {
  const resolved = useResolvedPath(item.path);
  const match = useMatch({ path: resolved.pathname, end: true });
  const isActive = Boolean(match);

  return (
    <NavLink 
      to={item.path} 
      className={({ isActive: navIsActive }) => 
        `relative px-6 py-3 mx-1 rounded-xl text-sm font-bold transition-all duration-300 group flex items-center gap-3 overflow-hidden ${ 
          navIsActive 
            ? 'bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600 text-white shadow-lg transform -translate-y-0.5 ring-2 ring-yellow-400 ring-opacity-50' 
            : 'text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:shadow-md'
        }`
      }
      onClick={closeMenu}
    >
      {isNavHovered && (
        <div className={`absolute -left-2 transition-all duration-500 ${isActive ? 'opacity-100 left-2' : 'opacity-0 group-hover:opacity-100 group-hover:left-2'}`}>
          <span className="text-sm text-yellow-300">🔥</span> {/* Icon or visual indicator */}
        </div>
      )}
      
      <div className="flex items-center gap-3 relative z-10">
        <item.icon className="text-base transition-transform duration-300 group-hover:scale-110" />
        <span className="relative z-10 transition-all duration-300 group-hover:font-bold">{item.label}</span>
      </div>
      
      {!isActive && (
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-red-400 group-hover:w-full transition-all duration-500 group-hover:delay-100 rounded" />
      )}
    </NavLink>
  );
}

export default NavigationLink;
