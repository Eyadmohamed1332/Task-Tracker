import React, { useState } from "react";
import styled from "styled-components";
import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import DestroyWindow from "../DestroyWindow";

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 10px;
  padding: 16px;
  width: 200px;
`;

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardTitle = styled.div`
  font-weight: bold;
`;

const CardText = styled.div`
  word-break: break-all;
`;

const Card = ({ id = 1, name = "", description = "", createdAt = "" }) => {
  const [isDestroyModalObject, setIsDestroyModalOpen] = useState(false);

  return (
    <StyledCard>
      <div>
        <CardTitle> Name: </CardTitle>
        <CardText>
          <Link href={`project/${id}`} color="green" label={name} />
        </CardText>
        <CardTitle> Description: </CardTitle>
        <CardText> {description} </CardText>
        <CardTitle> Created at: </CardTitle>
        <CardText> {createdAt} </CardText>
          <Link href={`project/${id}/tasks`} color="purple" label="Task" />
          <Link href="#" color="gray" label="Edit" />
          <Button onClick={() => setIsDestroyModalOpen(true)} color="red" label="Delete" />
      </div>
      {isDestroyModalObject && (
        <DestroyWindow
          isOpen={isDestroyModalObject}
          projectName={`project ${name}`}
          setIsOpen={setIsDestroyModalOpen}
        />
      )}
    </StyledCard>
  );
};

export default Card;