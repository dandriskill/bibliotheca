import React, { useEffect } from 'react';
import Modal from 'react-modal';

import '../styles/StandardModal.css';

function StandardModal({
  content,
  modalIsOpen,
  closeModal,
}) {
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

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