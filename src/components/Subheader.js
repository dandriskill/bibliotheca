import React from 'react';
import '../styles/Subheader.css';

import SearchBar from './SearchBar';
import AddEditBook from './AddEditBook';

function Subheader({
  books,
  saveBook,
  searchBook,
  openModal,
  closeModal,
}) {
  return (
    <div className='Subheader'>
      <h2 className='volumes-count'>Volumes: {books ? books.length : 0}</h2>
      <span className='search-bar'>
        <SearchBar searchBook={searchBook}/>
      </span>
      <button
        className='add-button'
        type='button'
        onClick={() => openModal(
          <AddEditBook saveBook={saveBook} closeModal={closeModal} />
        )}
      >
        Add +
      </button>
    </div>
  );
}

export default Subheader;