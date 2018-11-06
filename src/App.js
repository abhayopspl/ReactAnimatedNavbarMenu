import React from "react";
import styled from "styled-components";

import { AnimatedNavbar } from "./NavbarCore/Navbar";

const AppContainer = styled.div`
  background: #53f;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`;

export class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <AnimatedNavbar />
      </AppContainer>
    );
  }
}
