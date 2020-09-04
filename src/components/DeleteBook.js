import React from 'react';
import '../styles/DeleteBook.css';

function DeleteBook({
  bookId,
  bookTitle,
  bookAuthor,
  deleteBook,
  closeModal,
}) {
  return (
    <div className='DeleteBook'>
      <h3>Are you sure you want to delete {bookTitle} by {bookAuthor}?</h3>
      <button
        type='button'
        className='modal-button'
        onClick={() => deleteBook(bookId)}
      >
        Yes
      </button>
      <button
        type='button'
        className='modal-button'
        onClick={() => closeModal()}
      >
        No
      </button>
    </div>
  );
}

export default DeleteBook;