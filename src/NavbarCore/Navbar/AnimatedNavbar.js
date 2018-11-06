import React from "react";
import styled from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";

import { Navbar } from "./Navbar";
import { NavbarItem } from "./NavbarItem";
import { DropdownContainer } from "../Dropdown/DropdownContainer";

import { ProductsDropdown } from "../Dropdown/ProductsDropdown/ProductsDropdown";
import { DevelopersDropdown } from "../Dropdown/DevelopersDropdown/DeveloperDropdown";
import { CompanyDropdown } from "../Dropdown/CompanyDropdown/CompanyDropdown";

const navbarConfig = [
  { title: "Products", dropdown: ProductsDropdown },
  { title: "Developers", dropdown: DevelopersDropdown },
  { title: "Company", dropdown: CompanyDropdown }
];

export class AnimatedNavbar extends React.Component {
  state = {
    activeIndices: []
  };

  onMouseEnter = i => {
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
      return;
    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(i)
    }));
  };

  onMouseLeave = () => {
    this.setState({
      activeIndices: []
    });
  };

  render() {
    let CurrentDropdown;

    const currentIndex = this.state.activeIndices[
      this.state.activeIndices.length - 1
    ];

    if (typeof currentIndex === "number")
      CurrentDropdown = navbarConfig[currentIndex].dropdown;

    return (
      <Flipper flipKey={currentIndex}>
        <Navbar onMouseLeave={this.onMouseLeave}>
          {navbarConfig.map((n, index) => {
            return (
              <NavbarItem
                title={n.title}
                index={index}
                key={index}
                onMouseEnter={this.onMouseEnter}
              >
                {currentIndex === index && (
                  <DropdownContainer>
                    <CurrentDropdown />
                  </DropdownContainer>
                )}
              </NavbarItem>
            );
          })}
        </Navbar>
      </Flipper>
    );
  }
}
