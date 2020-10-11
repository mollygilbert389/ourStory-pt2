import React from "react";
// import {Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import Login from "../Login"
import Logout from "../Logout"
import {useAuth0} from "@auth0/auth0-react"

function Header(props) {
  const {user, isAuthenticated} = useAuth0();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#">Our Story</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Login
            ></Login>
          </Nav>
          <Nav>
            {isAuthenticated && (<a className="navbar-brand">{user.name}</a>)}
          </Nav>
          <Nav>
            <Logout></Logout>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
