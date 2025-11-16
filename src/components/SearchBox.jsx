
import { useState } from 'react';

function SearchBox({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value);  
  };

  return (
    <div className="mb-4 w-ful">
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={handleInputChange}
        className="border px-4 py-2 w-3xl rounded"
      />
    </div>
  );
}

export default SearchBox;
