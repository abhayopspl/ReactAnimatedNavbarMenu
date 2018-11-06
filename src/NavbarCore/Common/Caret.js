import React from "react";
import styled from "styled-components";

export const Caret = styled.div`
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #fff;
  top: -20px;
  left: calc(50% - 10px);
  z-index: 1;
`;
