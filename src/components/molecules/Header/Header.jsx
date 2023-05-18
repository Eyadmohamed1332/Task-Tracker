import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const Title = styled.div`
  grid-column: 2;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;

const LinkButton = styled(Link)`
text-decoration: none;
color: white;
font-size: 20px;
padding: 10px 20px;
background-color: #888888;
border-radius: 5px;
transition: background-color 0.3s ease;

&:hover {
  background-color: #aaaaaa;
}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LinkButton to="/">Home</LinkButton>
      <Title>Task Tracker</Title>
      <LinkButton to="/Projects">Projects</LinkButton>
    </HeaderContainer>
  );
};

export default Header;