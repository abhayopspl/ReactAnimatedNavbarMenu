import React from "react";
import styled from "styled-components";

import { NavbarEl } from "./NavBarE1";
import { NavbarList } from "./NavbarList";

export class Navbar extends React.Component {
  render() {
    const { children, onMouseLeave } = this.props;
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <NavbarList>{children}</NavbarList>
      </NavbarEl>
    );
  }
}
