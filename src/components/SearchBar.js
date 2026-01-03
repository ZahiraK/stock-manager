import React from 'react';

function SearchBar({ searchText, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Rechercher un produit..."
      value={searchText}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;