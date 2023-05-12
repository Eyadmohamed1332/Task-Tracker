import React from 'react'
import DefaultTemplate from "../templates"
import styled from "styled-components"
import Button from "../atoms/Button";

const MyFact = styled.li`
  font-size: 15px;
`;

const MyList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const onClick = () => {
  console.log("Hi there");
};

const HomePage = () => {
  return (
    <DefaultTemplate>
      <MyList>
        <MyFact> I love Sports </MyFact>
        <MyFact> I prefer silence </MyFact>
        <MyFact> I like challenges </MyFact>
      </MyList>
      <Button onClick={onClick} label="hello"/>
    </DefaultTemplate>
  );
};

export default HomePage;