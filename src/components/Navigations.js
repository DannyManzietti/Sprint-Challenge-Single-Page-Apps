import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class MenuBasic extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <NavLink to="/">
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          >
            <Icon name="home" /> Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/characters">
          <Menu.Item
            name="Characters"
            active={activeItem === "Characters"}
            onClick={this.handleItemClick}
          >
            <Icon name="group" /> Characters
          </Menu.Item>
        </NavLink>

        <NavLink to="/locations">
          <Menu.Item
            name="Location"
            active={activeItem === "Location"}
            onClick={this.handleItemClick}
          >
            <Icon name="map" /> Locations
          </Menu.Item>
        </NavLink>

        <NavLink to="/episodes">
          <Menu.Item
            name="Episodes"
            active={activeItem === "Episodes"}
            onClick={this.handleItemClick}
          >
            <Icon name="video camera" /> Episodes
          </Menu.Item>
        </NavLink>
      </Menu>
    );
  }
}
