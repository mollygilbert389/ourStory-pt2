import React, {useEffect} from "react";
import {Button} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react"

function Profile(){
    const {user, isAuthenticated} = useAuth0();
    const savetoRedux = () => {
        
    }
    return (
        !isAuthenticated && 
        (savetoRedux())
    );
}

export default Profile;