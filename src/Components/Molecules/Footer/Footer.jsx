import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background: black;
    padding: 0.5rem 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    font-size: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2023 Eyad</p>
    </FooterContainer>
  );
};

export default Footer;
