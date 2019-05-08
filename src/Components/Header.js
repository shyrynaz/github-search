import React, { Component } from "react";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
class Header extends Component {
  onLogin() {
    this.props.onLogin();
  }

  onLogout() {
    this.props.onLogout();
  }
  render() {
    let page;
    if (this.props.accessToken) {
      page = (
        <NavItem onClick={this.onLogout.bind(this)} href="#">
          <Button>Logout</Button>
        </NavItem>
      );
    } else {
      page = (
        <NavItem onClick={this.onLogin.bind(this)} href="#">
          <Button>Login</Button>
        </NavItem>
      );
    }
    return (
      <Navbar className="App-header">
        <Navbar.Header>
          <Navbar.Brand>Github Searcher</Navbar.Brand>
        </Navbar.Header>
        <Nav>{page}</Nav>
      </Navbar>
    );
  }
}

export default Header;
