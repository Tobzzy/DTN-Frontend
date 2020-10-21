import styled from "styled-components";

export const Form = styled.form(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
}));

export const Input = styled.input(() => ({
  textTransform: "capitalize",
}));
