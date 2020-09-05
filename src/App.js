// * Developer's Note: This component utilizes the new React Hooks API rather than class-based components
import React, { useState, useEffect } from 'react';
import './styles/App.css';

import Subheader from './components/Subheader';
import BooksHeader from './components/BooksHeader';
import Library from './components/Library';
import StandardModal from './components/StandardModal';
import Success from './components/Success';
import {
  getBooks,
  saveBook,
  updateBook,
  deleteBook,
} from './api';
import { testBooks } from './test-data';

// TODO:
// Write tests
// Style book update/save forms
// Connect to Firebase and write Firebase API calls

// MAYBE:
// Format search bar
// Move props and handlers through Redux?
// Add search bar functionality, which updates the books array by comparing string input to author or title
function App() {
  const [books, setBooks] = useState([]);
  const [booksFallback, setBooksFallback] = useState([]); // Note: Maintains book list after search bar is cleared
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    handleGetBooks();
  }, []);

  function handleGetBooks() {
    setBooks(testBooks);
    setBooksFallback(testBooks);
  }

  function handleSaveBook(book) {
    saveBook(book);
    handleCloseModal();
    handleOpenModal(
      <Success
        message={'This volume has been added!'}
        closeModal={handleCloseModal}
      />
    );
  }

  function handleUpdateBook(book) {
    updateBook(book);
    handleCloseModal();
    handleOpenModal(
      <Success
        message={'This volume has been updated!'}
        closeModal={handleCloseModal}
      />
    );
  }

  function handleDeleteBook(id) {
    deleteBook(id);
    handleCloseModal();
    handleOpenModal(
      <Success
        message={'This volume has been deleted.'}
        closeModal={handleCloseModal}
      />
    );
  }

  function handleOpenModal(content) {
    setModalContent(content);
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
    setModalContent(null);
  }

  return (
    <div className='App'>
      <div className='App-inner'>
        <h1>BIBLIOTHECA</h1>
        <h3>The Library App</h3>
        <div className='divider-container'>
          <div className='divider'></div>
        </div>
        <h1 className='faded-text'>Ω</h1>
        <Subheader
          books={books}
          openModal={handleOpenModal}
          closeModal={handleCloseModal}
          saveBook={handleSaveBook}
        />
        <BooksHeader />
        <Library
          books={books} 
          openModal={handleOpenModal}
          closeModal={handleCloseModal}
          updateBook={handleUpdateBook}
          deleteBook={handleDeleteBook}
        />
      </div>
      <StandardModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        content={modalContent}
      />
    </div>
  );
}

export default App;
