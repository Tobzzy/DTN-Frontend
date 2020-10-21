import React from "react";
import { Route } from "react-router-dom";
import * as Styled from "./App.styled";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Cities } from "../Cities";
import { AddCity } from "../AddCity";

export const App = () => {
  return (
    <>
      <Styled.Global />
      <Styled.App>
        <Header />
        <Styled.Main>
          <Styled.Content>
            <Route exact path="/">
              <AddCity />
              <Cities />
            </Route>
          </Styled.Content>
        </Styled.Main>
        <Footer />
      </Styled.App>
    </>
  );
};
