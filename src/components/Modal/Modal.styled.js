import styled from "styled-components";

export const Backdrop = styled.div(() => ({
  backgroundColor: "black",
  bottom: 0,
  left: 0,
  opacity: 0.5,
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 0,
}));

export const ModalWrapper = styled.div(() => ({
  alignItems: "center",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  left: 0,
  position: "fixed",
  right: 0,
  top: 0,
}));

export const Modal = styled.div(() => ({
  backgroundColor: "white",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  maxWidth: "800px",
  padding: "1rem",
  position: "relative",
  width: "100%",
  zIndex: 1,
}));

export const Header = styled.header(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
