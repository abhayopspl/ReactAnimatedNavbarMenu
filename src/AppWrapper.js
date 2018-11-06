import React from "react";
import styled from "styled-component";

class AnimatedNavbar extends Component {
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
      <Navbar onMouseLeave={this.onMouseLeave}>
        {navbarConfig.map((n, index) => {
          return (
            <NavbarItem
              title={n.title}
              index={index}
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
    );
  }
}
