import React, {useState} from "react";
import Modal from "react-modal";
import ModalWindow from "./ModalWindow";

const ParentComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const deleteProject = () => {
    console.log("Project deleted.");
    closeModal();
  }

  return (
    <div>
      <ModalWindow 
        modalIsOpen={modalIsOpen} 
        openModal={openModal} 
        closeModal={closeModal}
        deleteProject={deleteProject}
      />
    </div>
  );
}

Modal.setAppElement("body");

export default ParentComponent;