import React from 'react';
import '../styles/Library.css';

import Book from './Book';

function Library({
  books,
  openModal,
  closeModal,
  updateBook,
  deleteBook,
}) {
  return (
    <div className='Library'>
      {books ? (
        <ul className='books'>
          {books.map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                openModal={openModal}
                closeModal={closeModal}
                updateBook={updateBook}
                deleteBook={deleteBook}
              />
            );
          })}
        </ul>
      ) : (
        <div className="fallback-text">No volumes available.</div>
      )}
    </div>
  );
}

export default Library;