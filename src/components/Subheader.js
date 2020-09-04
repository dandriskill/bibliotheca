import React from 'react';
import '../styles/Subheader.css';

import SearchBar from './SearchBar';
import AddBook from './AddBook';

function Subheader({
  books,
  openModal,
  closeModal,
  saveBook,
}) {
  return (
    <div className="Subheader">
      <h2 className="volumes-count">Volumes: {books ? books.length : 0}</h2>
      <span className="search-bar"><SearchBar /></span>
      <button
        className="add-button"
        type="button"
        onClick={() => openModal(
          <AddBook saveBook={saveBook} closeModal={closeModal} />
        )}
      >
        Add +
      </button>
    </div>
  );
}

export default Subheader;