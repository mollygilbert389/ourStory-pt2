import React, {useEffect} from "react";
import {Button} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react"

function Login(){
    const {logout, isAuthenticated} = useAuth0();
    return (
      isAuthenticated && 
      (<div>
          <Button className="white" variant="success"
            onClick={() => logout()}
          >LOGOUT
          </Button>
      </div>)
    );
}

export default Login;