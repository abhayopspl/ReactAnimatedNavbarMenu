import React from "react";
import styled from "styled-components";

import { Flipper, Flipped } from "react-flip-toolkit";
import { Caret } from "../Common/Caret";
import { DropdownBackground } from "./DropdownBackground";

export class DropdownContainer extends React.Component {
  render() {
    return (
      <div>
        <Flipped flipId="dropdown-caret">
          <Caret />
        </Flipped>
        <Flipped flipId="dropdown">
          <DropdownBackground>{this.props.children}</DropdownBackground>
        </Flipped>
      </div>
    );
  }
}
