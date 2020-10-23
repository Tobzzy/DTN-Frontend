import styled from "styled-components";

export const Main = styled.form(() => ({
  border: "none",
  fontSize: "1rem",
  fontWeight: 500,
  outline: "none",
  padding: "0.5rem 0",
  width: "100%",
}));

export const Column = styled.div(({ flex = 1 }) => ({
  display: "flex",
  flex: flex,
  flexDirection: "column",
  marginTop: "1rem",
  width: "100%",
  justifyContent: "center",
}));

export const Input = styled.input(({ flex = 1 }) => ({
  height: "2rem",
  justifyContent: "center",
  marginTop: "0.5rem",
  width: "100%",
}));
