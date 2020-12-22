import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
  >
      <h3>Seleted Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
  </Modal>
)

export default OptionModal;


