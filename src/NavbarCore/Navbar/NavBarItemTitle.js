import React from "react";
import styled from "styled-components";

export const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-size: 18px;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  color: white;
  font-family: inherit;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover,
  &:focus {
    opacity: 0.7;
    outline: none;
  }
`;
