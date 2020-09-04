import React from 'react';
import Modal from 'react-modal';

import '../styles/StandardModal.css';

Modal.setAppElement('#root');

function StandardModal({
  content,
  modalIsOpen,
  closeModal,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className='modal'
    >
      {content ? content: null}
    </Modal>
  );
}

export default StandardModal;