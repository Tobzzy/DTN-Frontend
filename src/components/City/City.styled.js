import styled from "styled-components";

export const City = styled.div(() => ({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  padding: "1rem",
  width: "100%",
  ":nth-child(2n)": {
    backgroundColor: "hsl(0, 0%, 95%)",
  },
  "@media (hover: hover) and (pointer: fine)": {
    ":hover": {
      backgroundColor: "hsl(0, 0%, 90%)",
    },
  },
}));
