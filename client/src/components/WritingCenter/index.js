import React, {useState, useEffect} from "react";
import { Button, Modal } from 'react-bootstrap';
import StartBtn from "../StartBtn"
import CloseBtn from "../CloseBtn"
import API from "../../utils/API"
import io from 'socket.io-client'

import "./style.css";


function WritingCenter(props){
    const [showModal, setShowModal] = useState(false)
    const [showTextModal, setTextModal] = useState(false)
    const [timer, setTimer] = useState(120)
    const [startTimer, setStartTimer] = useState(false)
    const [sentence, setSentence] = useState("")


    const handleModal = () => {
        setShowModal(!showModal)
    }

   const handleTextModal = () => {
        setTextModal(!showTextModal)
    }

   const handleInputChange = (event) => {
        setSentence(event.target.value)
    };

   const handleSentenceSave = () => {
        stopTimer()
        setSentence("")
        setTextModal(!showTextModal)

        props.setIsEditing("isEditing", false)

          API.saveSentence({
            sentence,
            author: "someone new"
          })
            .catch(err => console.log(err));

            // window.location.reload()
    }

   const handleStart = () => {
        setTextModal(!showTextModal)
        setStartTimer(true)
    }

    useEffect(() => {
        let interval = null;

        if (startTimer) {
            interval = setInterval(() => {
            setTimer(timer => timer - 1);
            }, 1000);
        } else if (!startTimer && timer === 0) {
            clearInterval(interval);
            setTextModal(!showTextModal)
        }
        
        return () => clearInterval(interval);

    }, [startTimer, timer]);

   const stopTimer = () => {
        setStartTimer(false)
        setTimer(120)
    }

    
    return (
        <div>
             <p className="misson">Now that you've logged in, have you thought of a sentance you'd like to add? You only get one chances so make it count! Use our dictionary and thesaurus resources if you need help!</p>
            <div className="container">
                <Button 
                onClick={() => handleModal()} 
                className="firstModal mainBtn white"
                size="lg"
                >Let's Get Started</Button>
                <Modal
                className="d-flex flex-column align-items-center" 
                show={showModal} 
                onHide={() => handleModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Now when you click the start button you will be able to add your sentence in here.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Click this start button and you will have 2 mins.</p>
                        <StartBtn 
                        onHandleClick={() => handleStart()}
                        setIsEditing={props.setIsEditing}
                        book={props.book}
                        ></StartBtn>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={() => handleModal()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showTextModal} onHide={() => handleTextModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <p>Add your sentence here</p>
                            <div>Time Remaining: {timer} seconds</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <input 
                            name="sentence" 
                            placeholder="Your Contribution (160 characters max)"
                            required="true" 
                            maxlength="160" 
                            className="form-control"
                            onChange={(event) => handleInputChange(event)}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    {/* <Button variant="success" className="white" onClick={this.handleSentenceSave}>
                        Save!
                    </Button> */}
                    <CloseBtn  
                    onHandleClick={() => handleSentenceSave()}
                    book={props.book}
                    ></CloseBtn>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )}

export default WritingCenter;


