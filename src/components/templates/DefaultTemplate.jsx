import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import Header from "../molecules/Header"
import Footer from "../molecules/Footer"
import Button from '../atoms/Button/Button'

const MainContent = styled.div`
  background: white;
`

const ForButton = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
`
const Styled = styled.button`
  background-color: gray;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 12px;
  margin-top: 8px;
  `

const DefaultTemplate = ({ children }) => {
    const [showScrollButton, setShowScrollButton] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 0) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      }

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        document.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Header />
                {showScrollButton && (
                    <ForButton>
                        <Styled>
                        <button onClick={onClick}>Scroll to top</button>
                        </Styled>
                    </ForButton>
                )}
                <MainContent>{children}</MainContent>
            <Footer />
        </div>
    )
}

export default DefaultTemplate;