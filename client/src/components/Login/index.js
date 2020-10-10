import React, {useEffect} from "react";
import "./style.css";
import {Button} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react"

function Login(){
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return (
      !isAuthenticated && 
        (<div>
            <Button
              onClick={() => loginWithRedirect()}
            >Login
            </Button>
        </div>)
    );
}

export default Login;