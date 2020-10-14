import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
// import io from "socket.io-client"

// let socket;

function StartBtn(props){
    // const [isEditing, setEditStatus] = useState(false)
    // const [message, setMessage] = useState('')
    // const ENDPOINT = "localhost:3000" 
    
    // useEffect(() => {
    //     socket = io(ENDPOINT);
    //     socket.emit('startClicked', {isEditing}, () => {        
    //         socket.on('message', (message) => {
    //             setMessage(message)
    //         })
    //     })
    // }, [ENDPOINT])

    const handleClick = () => {
        console.log("is clicked")
        props.onHandleClick()
        // props.setEditStatus(true)
        
        //redux save
        props.setIsEditing("isEditing", true)

        // socket.emit('checkStart', {isEditing:true}, () => {})
        // socket.on('message', () => {

        // })
    }

    
    return (
        <div>
            <Button className="white" onClick={() => handleClick()} disabled={props.disabled}>Start</Button>
        </div>
    );
}

export default StartBtn;