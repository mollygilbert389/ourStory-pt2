import React, {useEffect} from "react";
import {Button} from "react-bootstrap";

// import queryString from "query-string"

let socket;

function CloseBtn(props, {location}){

    const handleClick = () => {
        console.log("is clicked")
        props.onHandleClick()
        
    }


    return (
        <div>
            <Button variant="success" className="white" onClick={() => handleClick()}>Save!</Button>
        </div>
    );
}

export default CloseBtn;