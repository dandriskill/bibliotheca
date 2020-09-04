import React from 'react';
import '../styles/BooksHeader.css';

function BooksHeader() {
  return (
    <div className='BooksHeader'>
      <div className='books-header-title'>Title</div>
      <div className='books-header-author'>Author</div>
      <div className='books-header-pages'>Pages</div>
      <div className='books-header-available'>Available</div>
      <div className='books-header-overdue'>Overdue</div>
      <div className='books-header-tools'></div>
    </div>
  );
}

export default BooksHeader;