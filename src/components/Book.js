import React from 'react';
import '../styles/Book.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditBook from './EditBook';
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
      <div className="book-title">{ book.title }</div>
      <div className="book-author">{ book.author }</div>
      <div className="book-pages">{ book.pages }</div>
      <div className="book-available">{ book.available }</div>
      <div className="book-overdue">{ book.overdue }</div>
      <div className="book-tools">
        <div>
          <EditButton onClick={() => openModal(
            <EditBook
              bookId={book.id}
              updateBook={updateBook}
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
              closeModal={closeModal}
            />
          )}/>
        </div>
      </div>
    </li>
  );
}

export default Book;