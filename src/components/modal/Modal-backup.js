import React from "react";
import "./Modal.scss";
import ApexGameImg from "../../assets/images/image 4.png";
import chat from "../../assets/images/chat_bubble.png";
import heart from "../../assets/images/heart.png";
import { useState } from "react";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal__display" onClick={onClose}></div>
    </div>
  );
};

export default Modal;
