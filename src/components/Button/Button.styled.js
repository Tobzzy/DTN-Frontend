import styled from "styled-components";
import { darken, readableColor } from "polished";

export const Button = styled.button(({ backgroundColor, disabled }) => ({
  backgroundColor,
  color: readableColor(backgroundColor),
  cursor: disabled ? "default" : "pointer",
  lineHeight: "2rem",
  borderRadius: "false",
  opacity: disabled ? 0.5 : 1,
  justifyContent: "center",
  marginTop: "0.5rem",
  outline: "none",
  width: "120px",
  border: "none",
  height: "30px",
  "@media (hover: hover) and (pointer: fine)": {
    ":hover": {
      backgroundColor: disabled
        ? backgroundColor
        : darken(0.1, backgroundColor),
      color: disabled
        ? readableColor(backgroundColor)
        : readableColor(darken(0.1, backgroundColor)),
    },
  },
}));
