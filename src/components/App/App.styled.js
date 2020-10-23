import styled, { createGlobalStyle } from "styled-components";

const img =
  "https://datacenternews.asia/uploads/story/2020/06/03/GettyImages-1151250848.jpg";

export const Global = createGlobalStyle(() => ({
  "*": {
    boxSizing: "border-box",
    textAlign: "center",
  },
  body: {
    fontFamily: "sans-serif",
    margin: "0",
    background: `url(${img})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export const App = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const Main = styled.main(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  justifyContent: "space-between",
}));

export const Content = styled.div(() => ({
  maxWidth: "300px",
  width: "100%",
}));
