import React, {useState} from "react";
import {Button} from "react-bootstrap";
import io from "socket.io-client"

let socket;

function CloseBtn(props){
    const ENDPOINT = "localhost:3000"
    const [message, setMessage] = useState('')
    
    const handleClick = () => {
        socket = io(ENDPOINT)
        console.log("is clicked")
        props.onHandleClick()
        socket.emit('checkStart', {isEditing:false}, () => {})
        socket.emit("disconnet")
        socket.off()
        socket.on('message', (message) => {
             setMessage(message)

        })
    }

    console.log(message)
    
    return (
        <div>
            <Button variant="success" className="white" onClick={() => handleClick()}>Save!</Button>
        </div>
    );
}

export default CloseBtn;