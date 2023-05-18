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
  justify-content: space-around;
  flex-direction: column;
  min-height: calc(100vh - 41px);
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
        <Button onClick={onClick} label="hello"/>
      </MyList>
    </DefaultTemplate>
  );
};

export default HomePage;