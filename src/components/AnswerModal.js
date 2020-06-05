import React from 'react';
import Modal from 'react-modal';

const AnswerModal = (props) => (
    <Modal
        isOpen={props.selected}
        contentLabel="Answer"
        onRequestClose={props.handleClearSelected}
        className="modal"
    >
        <h3 className="modal__title">Answer is:-</h3>
        <p className="modal__body">{props.answer}</p>
        <button className="button" onClick={props.handleClearSelected}>OKAY</button>
    </Modal>
);

export default AnswerModal;