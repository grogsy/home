import React from "react";
import "./styles/image_modal.css";

const Modal = ({ handleClose, show, imgSrc }) => {
  const showHideClassName = show
    ? "modal-image-focused modal-image-show zoom-out"
    : "modal-image-focused modal-image-hide";

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className="modal-image-main">
        <img className="zoom-out" src={imgSrc} />
      </section>
    </div>
  );
};

export default Modal;
