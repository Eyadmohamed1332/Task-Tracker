import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import DefaultTemplate from "../templates/DefaultTemplate";
import Card from "../molecules/Card";

const MyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const MyProjects = [
  {
    id: 1,
    name: "Project #1",
    description: "Project (1)",
    createdAt: "22 days ago",
  },
  {
    id: 2,
    name: "Project #2",
    description: "Project (2)",
    createdAt: "22 days ago",
  },
  {
    id: 3,
    name: "Project #3",
    description: "Project (3)",
    createdAt: "22 days ago",
  },
  {
    id: 4,
    name: "Project #4",
    description: "Project (4)",
    createdAt: "22 days ago",
  },
  {
    id: 5,
    name: "Project #5",
    description: "Project (5)",
    createdAt: "22 days ago",
  },
  {
    id: 6,
    name: "Project #6",
    description: "Project (6)",
    createdAt: "22 days ago",
  },
  {
    id: 7,
    name: "Project #7",
    description: "Project (7)",
    createdAt: "22 days ago",
  },
  {
    id: 8,
    name: "Project #8",
    description: "Project (8)",
    createdAt: "22 days ago",
  },
  {
    id: 9,
    name: "Project #9",
    description: "Project (9)",
    createdAt: "22 days ago",
  },
  {
    id: 9,
    name: "Project #9",
    description: "Project (9)",
    createdAt: "22 days ago",
  },
  {
    id: 9,
    name: "Project #9",
    description: "Project (9)",
    createdAt: "22 days ago",
  },
  {
    id: 9,
    name: "Project #9",
    description: "Project (9)",
    createdAt: "22 days ago",
  },
  {
    id: 9,
    name: "Project #9",
    description: "Project (9)",
    createdAt: "22 days ago",
  },
  {
    id: 9,
    name: "Project #9",
    description: "Project (9)",
    createdAt: "22 days ago",
  },
  {
    id: 9,
    name: "Project #9",
    description: "Project (9)",
    createdAt: "22 days ago",
  },
  {
    id: 9,
    name: "Project #9",
    description: "Project (9)",
    createdAt: "22 days ago",
  },
];

const Projects = () => {

  const groupProjectCard = MyProjects.map((project) => (
    <Card
      key={`card-${v4()}`}
      id={project.id}
      name={project.name}
      description={project.description}
      createdAt={project.createdAt}
    />
  ));
  return (
    <DefaultTemplate>
      <MyCard>{groupProjectCard}</MyCard>
    </DefaultTemplate>
  );
};

export default Projects;