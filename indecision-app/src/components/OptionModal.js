import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleCloseSelectionModal}
    closeTimeoutMS={200}
    className='modal'
  >
      <h3 className='modal__title'>Seleted Option</h3>
      {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
      <button className='button' onClick={props.handleCloseSelectionModal}>Okey</button>
  </Modal>
)

export default OptionModal;


