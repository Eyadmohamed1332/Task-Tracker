import React from "react";
import styled, { css } from "styled-components";

const Styled = styled.button(
  ({ color }) => css`
    background-color: ${color};
    border-radius: 50%;
    color: white;
    padding: 6px 10px;
    text-align: center;
    display: inline-block;
    border-radius: 4px;
    margin: 2px;
    font-size: 14px;
  `,
);

const Button = ({ label, disable = false, onClick = () => {}, color = "#2f2f2f" }) => {
  return (
    <Styled color={color} onClick={onClick} disabled={disable}>
      {label}
    </Styled>
  );
};

export default Button;