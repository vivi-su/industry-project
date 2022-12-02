import React from "react";
import "./Modal.scss";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal">
      <div className="modal__display">
        <h1>modal palce holder</h1>
        <br></br>
        <img
          className="modal__icon"
          src=""
          alt="close button"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
