import React, {useState} from "react";
import {Button} from "react-bootstrap";


function StartBtn(props){
    const [isEditing, setEditStatus] = useState(false)
    
    const handleClick = () => {
        console.log("is clicked")
        props.onHandleClick()
        setEditStatus(true)
        props.setIsEditing("isEditing", true)
    }
    
    return (
        <div>
            <Button className="white" onClick={() => handleClick()} disabled={props.book.isEditing}>Start</Button>
        </div>
    );
}

export default StartBtn;