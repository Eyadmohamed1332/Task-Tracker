import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const YesButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 100px;
    background-color: red;
    color: white;
`;

const NoButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 100px;
  background-color: blue;
  color: white;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #404040;
  padding: 2em;
  border-radius: 10px;
  color: white;
`;

const ModalWindow = ({modalIsOpen, openModal, closeModal, deleteProject}) => {
  return (
    <div>
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        contentLabel="Delete Project Modal"
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
              },
              content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                background: 'transparent',
                padding: '0'
              }
        }}
      >
      <ModalContent>
        <h2>Are you sure you want to delete this project?</h2>
        <ButtonsContainer>
        <YesButton onClick={deleteProject}>Yes</YesButton>
        <NoButton onClick={closeModal}>No</NoButton>
        </ButtonsContainer>
      </ModalContent>
      </Modal>
    </div>
  );
}

export default ModalWindow;
