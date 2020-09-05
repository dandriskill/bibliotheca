import React from 'react';
import '../styles/Success.css';

function Success({
  message,
  closeModal,
}) {
  return (
    <div className="Success">
      <h3>{ message }</h3>
      <button
        type='button'
        className='modal-button'
        onClick={() => closeModal()}
      >
        Close
      </button>
    </div>
  );
}

export default Success;