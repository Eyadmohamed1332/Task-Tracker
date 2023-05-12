import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

  const modalStyles = {
    content: {
      maxWidth: "520px",
      minWidth: "500px",
      maxHeight: "80%",
      borderRadius: "5px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid #E2EAF1",
      backgroundColor: "#FFFFFF",
      padding: "25px 45px 25px 35px",
    },
    overlay: {
      zIndex: 2,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };
  
  const CloseButton = styled.span`
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    color: #d6d9dc;
    font-size: 0.8rem;
    cursor: pointer;
    user-select: none;
    &::before {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      content: "✕";
    }
  `;

const ModalWindow = ({ isOpen = true, setIsOpen = () => {}, children }) => {
  return (
    <Modal
      style={{
        content: { ...modalStyles.content },
        overlay: { ...modalStyles.overlay },
      }}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={() => setIsOpen(false)}
    >
      <CloseButton onClick={() => setIsOpen(false)} />
      {children}
    </Modal>
  );
};

Modal.setAppElement("body");

export default ModalWindow;