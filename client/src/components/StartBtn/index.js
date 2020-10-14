import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import io from "socket.io-client"

let socket;

function StartBtn(props){
    const [isEditing, setEditStatus] = useState(false)
    const [message, setMessage] = useState('')
    const ENDPOINT = "localhost:3000" 
    
    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit('checkStart', {isEditing}, () => {        
            socket.on('message', (message) => {
                setMessage(message)
            })
        })
    }, [ENDPOINT])

    const handleClick = () => {
        console.log("is clicked")
        props.onHandleClick()
        setEditStatus(true)
        props.setIsEditing("isEditing", true)

        socket=io(ENDPOINT)
        console.log(socket)

        socket.emit('checkStart', {isEditing:true}, () => {})
        socket.on('message', (message) => {
            setMessage(message)
        })
    }

    console.log(message)
    
    return (
        <div>
            <Button className="white" onClick={() => handleClick()} disabled={message.disabled}>Start</Button>
        </div>
    );
}

export default StartBtn;