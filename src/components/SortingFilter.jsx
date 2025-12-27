import React, { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

function SortingFilter({ handleSorting, currentSort }) {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: "", label: "Default", icon: "🔄" },
    { value: "price-low", label: "Price: Low to High", icon: "💰" },
    { value: "price-high", label: "Price: High to Low", icon: "💰" },
    { value: "rating", label: "Highest Rated", icon: "⭐" },
    { value: "popular", label: "Most Popular", icon: "🔥" }
  ];

  const handleSortChange = (value) => {
    handleSorting(value);
    setIsOpen(false);
  };

  const currentLabel = sortOptions.find(opt => opt.value === currentSort)?.label || "Sort by";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex items-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-xl hover:border-amber-400 hover:shadow-md transition-all duration-300 min-w-[180px]"
      >
        <FaSortAmountDown className="text-gray-600" />
        <span className="text-gray-700 font-medium">{currentLabel}</span>
        <IoChevronDown className={`text-gray-500 ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
            <div className="p-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSortChange(option.value)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    currentSort === option.value
                      ? "bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border border-amber-200"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <span className="text-lg">{option.icon}</span>
                  <span className="font-medium">{option.label}</span>
                  {currentSort === option.value && (
                    <span className="ml-auto text-amber-500">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SortingFilter;