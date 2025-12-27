import { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

function SearchBox({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearchChange('');
    inputRef.current?.focus();
  };

  // Keyboard shortcut for focus
  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="w-full">
      <div className="relative group">
        <AiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for delicious dishes, burgers, pizzas, chicken, sides..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full 
            pl-12 
            pr-12 
            py-3
            bg-white 
            border 
            ${isFocused ? 'border-amber-400 ring-2 ring-amber-200 shadow-lg' : 'border-gray-300'}
            rounded-2xl
            focus:outline-none 
            transition-all 
            duration-300 
            placeholder:text-gray-400 
            text-gray-800 
            shadow-sm
            hover:shadow-md
            hover:border-amber-300
            lg:py-4
            lg:pl-12
            lg:pr-14
            lg:text-lg
            lg:placeholder:text-base
            lg:hover:shadow-xl
          `}
          style={{
            maxWidth: '100%'
          }}
        />
        
        {/* Keyboard shortcut hint for desktop */}
        <div className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 items-center gap-1">
          {searchTerm ? (
            <button
              onClick={clearSearch}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <AiOutlineClose className="text-xl" />
            </button>
          ) : (
            <div className="flex items-center gap-1 text-xs font-medium text-gray-500 border border-gray-300 rounded-lg px-2 py-1 bg-white/90">
              <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">Ctrl</span>
              <span>+</span>
              <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">K</span>
            </div>
          )}
        </div>
        
        {/* Clear button for mobile */}
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <AiOutlineClose className="text-lg" />
          </button>
        )}
      </div>
      
      {/* Search tips - Desktop only with wider layout */}
      <div className="hidden lg:flex items-center justify-between mt-4 px-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500">Quick search:</span>
          <div className="flex gap-2">
            <button 
              onClick={() => {
                setSearchTerm('Chicken');
                onSearchChange('Chicken');
              }}
              className="px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-amber-700 rounded-xl transition-all duration-300 hover:scale-105 border border-amber-200"
            >
              Chicken
            </button>
            <button 
              onClick={() => {
                setSearchTerm('Pizza');
                onSearchChange('Pizza');
              }}
              className="px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-amber-700 rounded-xl transition-all duration-300 hover:scale-105 border border-amber-200"
            >
              Pizza
            </button>
            <button 
              onClick={() => {
                setSearchTerm('Burger');
                onSearchChange('Burger');
              }}
              className="px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-amber-700 rounded-xl transition-all duration-300 hover:scale-105 border border-amber-200"
            >
              Burger
            </button>
            <button 
              onClick={() => {
                setSearchTerm('Spicy');
                onSearchChange('Spicy');
              }}
              className="px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-amber-700 rounded-xl transition-all duration-300 hover:scale-105 border border-amber-200"
            >
              Spicy
            </button>
            <button 
              onClick={() => {
                setSearchTerm('Vegetarian');
                onSearchChange('Vegetarian');
              }}
              className="px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-amber-700 rounded-xl transition-all duration-300 hover:scale-105 border border-amber-200"
            >
              Vegetarian
            </button>
          </div>
        </div>
        
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <AiOutlineClose />
            Clear search
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBox;