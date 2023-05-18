import React, { useState } from "react";
import styled from "styled-components";
import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import ModalWindow from "../../atoms/ModalWindow/ModalWindow";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div`
  background-color: #606060;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 2px;
  padding: 16px;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: row;
  align-items: center;
`;

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardTitle = styled.div`
  font-weight: bold;
  margin-top: 20px;
`;

const CardText = styled.div`
  word-break: break-all;
  margin-top: 20px;
`;

const Card = ({ id = 1, name = "", description = "", createdAt = "" }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const deleteProject = () => {
    console.log("Project deleted.");
    closeModal();
  }
  
  const openModal = () => {
    setModalIsOpen(true);
  }

  const goToTasks = () => {
    navigate(`/project/${id}/tasks`);
  };

  return (
    <StyledCard>
        <CardTitle>Name:</CardTitle>
        <CardText>
          <Link href={`project/${id}`} color="green" label={name} />
        </CardText>
        <CardTitle>Description:</CardTitle>
        <CardText> {description} </CardText>
        <CardTitle>Created:</CardTitle>
        <CardText> {createdAt} </CardText>
          <Button onClick={goToTasks} color="blue" label="Tasks" />          
          <Button href="#" color="green" label="Edit" />
          <Button onClick={openModal} color="red" label="Destroy" />
          {modalIsOpen && (
            <ModalWindow 
              modalIsOpen={modalIsOpen} 
              closeModal={closeModal} 
              deleteProject={deleteProject} 
            />
          )}
    </StyledCard>
  );
};


export default Card;