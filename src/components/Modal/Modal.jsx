import React from "react";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import * as Styled from "./Modal.styled";

export const Modal = ({ children, onClose }) => (
  <Styled.ModalWrapper>
    <Styled.Modal>
      <Styled.Header>
        <Icon onClick={onClose} path={mdiClose} size={1} />
      </Styled.Header>
      {children}
    </Styled.Modal>
    <Styled.Backdrop onClick={onClose} />
  </Styled.ModalWrapper>
);
