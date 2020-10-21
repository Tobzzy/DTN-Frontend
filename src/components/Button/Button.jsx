import React from "react";

import * as Styled from "./Button.styled";

export const Button = ({
  backgroundColor = "limegreen",
  disabled = false,
  onClick,
  type = "button",
  children,
}) => (
  <Styled.Button
    backgroundColor={backgroundColor}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </Styled.Button>
);
