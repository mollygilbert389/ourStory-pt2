import React from "react";
import Login from "../Login"
import Logout from "../Logout"
import {useAuth0} from "@auth0/auth0-react"

function Nav() {
  const {user, isAuthenticated} = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Our Story 
      </a>
      <Login></Login>
      <Logout></Logout>
      {isAuthenticated && (<a className="navbar-brand">{user.name}</a>)}
    </nav>
  );
}

export default Nav;
