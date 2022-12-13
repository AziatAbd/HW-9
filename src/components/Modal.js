import React from "react";
import "./type.css"

function Modal({ onClose, remove, id }) {
  return (
    <div className="Div">
      <p onClick={onClose}>{id}</p>
      <button onClick={remove}>delete</button>
    </div>
  );
}


export default Modal;
