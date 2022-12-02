import React from "react";
import "./Modal.scss";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal__display" onClick={onClose}></div>
    </div>
  );
};

export default Modal;
