import React from "react";
import styled, { css } from "styled-components";

const Styled = styled.button(
  ({ color }) => css`
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 12px;
  margin-top: 8px;

  &:hover {
    background-color: #5aac44;
  }
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