import React from "react";
import Icon from "@mdi/react";
import { mdiCoffee, mdiCardsHeart, mdiCodeJson } from "@mdi/js";

import * as Styled from "./Footer.styled";

export const Footer = () => {
  return (
    <Styled.Link>
      <Icon path={mdiCodeJson} size={0.6} /> by{" "}
      <a href="https://github.com/Tobzzy" target="blank">
        Toyib Ahmed
      </a>
      , with <Icon path={mdiCardsHeart} size={0.5} /> and{" "}
      <Icon path={mdiCoffee} size={0.5} />
    </Styled.Link>
  );
};
