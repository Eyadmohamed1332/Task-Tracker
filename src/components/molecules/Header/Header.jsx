import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

const Title = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Task Tracker</Title>
    </HeaderContainer>
  );
};

export default Header;
