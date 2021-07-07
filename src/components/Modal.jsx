import { useEffect } from "react";
import { createPortal } from "react-dom";
import "../css/modal.css";

function Modal(props) {
  const modalRoot = document.getElementById("modal-root");
  const modalDiv = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(modalDiv);
    modalDiv.classList.add('my-modal')
    return () => {
      modalRoot.removeChild(modalDiv);
    };
  }, []);
  return createPortal(props.children, modalDiv);
}

export default Modal;
