import React, {useEffect} from "react";
import {Button} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react"

function Profile(){
    const {user} = useAuth0();
    return (
      <div>
          {console.log(user)}
      </div>
    );
}

export default Profile;