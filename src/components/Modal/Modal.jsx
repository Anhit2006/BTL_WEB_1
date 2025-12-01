import React from "react";
import "./Modal.css";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="modal-bg">
      <div className="modal-box">
        <h3>{title}</h3>
        {children}

        <button
          className="btn"
          style={{ background: "#555", color: "white", marginTop: "15px" }}
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

export default Modal;
