import React from 'react';
import '../styles/Book.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import AddEditBook from './AddEditBook';
import DeleteBook from './DeleteBook';

function Book({
  book,
  openModal,
  closeModal,
  updateBook,
  deleteBook,
}) {
  return (
    <li className='Book'>
      <div className='book-title'>{ book.title }</div>
      <div className='book-author'>{ book.author }</div>
      <div className='book-pages'>{ book.pages }</div>
      <div className='book-available'>{ book.available ? 'Yes' : 'No' }</div>
      <div className='book-overdue'>{ book.overdue ? 'Yes' : 'No' }</div>
      <div className='book-tools'>
        <div>
          <EditButton onClick={() => openModal(
            <AddEditBook
              bookId={book.id}
              bookTitle={book.title}
              bookAuthor={book.author}
              bookPages={book.pages}
              bookAvailable={book.available}
              bookOverdue={book.overdue}
              updateBook={updateBook}
              openModal={openModal}
              closeModal={closeModal}
            />
          )}/>
        </div>
        <div>
          <DeleteButton onClick={() => openModal(
            <DeleteBook
              bookId={book.id}
              bookTitle={book.title}
              bookAuthor={book.author}
              deleteBook={deleteBook}
              openModal={openModal}
              closeModal={closeModal}
            />
          )}/>
        </div>
      </div>
    </li>
  );
}

export default Book;