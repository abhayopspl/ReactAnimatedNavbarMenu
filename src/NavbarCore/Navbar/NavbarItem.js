import React from "react";
import styled from "styled-components";

import { NavbarItemTitle } from "./NavBarItemTitle";
import { DropdownSlot } from "../Dropdown/DropdownSlot";

const NavbarItemEl = styled.li`
  position: relative;
  margin-left: 0.5rem;
  &::first-of-type {
    margin-left: 0;
  }
`;

export class NavbarItem extends React.Component {
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index);
  };

  render() {
    const { title, children } = this.props;
    return (
      <NavbarItemEl
        onMouseEnter={this.onMouseEnter}
        onFocus={this.onMouseEnter}
      >
        <NavbarItemTitle>{title}</NavbarItemTitle>
        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    );
  }
}
