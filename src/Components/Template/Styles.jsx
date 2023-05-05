import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Header from "../Molecules/Header"
import Footer from "../Molecules/Footer"

const MainContent = styled.div`
  background: white;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const Styles = ({ children }) => {
    return (
        <div>
            <Header />
                <MainContent>{children}</MainContent>
            <Footer />
        </div>
    )
}

export default Styles;