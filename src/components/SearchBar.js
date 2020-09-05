import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({
  searchBook,
}) {
  return (
    <div className='SearchBar'>
      <input
        type='text'
        placeholder='Search by author or title'
        onChange={searchBook}
      />
    </div>
  );
}

export default SearchBar;