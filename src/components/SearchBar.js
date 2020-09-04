import React from 'react';
import '../styles/SearchBar.css';

function SearchBar() {
  return (
    <div className='SearchBar'>
      <input type='text' placeholder='Search by author or title' />
    </div>
  );
}

export default SearchBar;