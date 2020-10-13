import React, {Component} from "react";
import { Button, Modal } from 'react-bootstrap';
import StartBtn from "../StartBtn"
import CloseBtn from "../CloseBtn"
import API from "../../utils/API"
import io from 'socket.io-client'

import "./style.css";

class WritingCenter extends Component {
    state = {
        showModal: false,
        showTextModal: false,
        timer: 120,
        timerId: "",
        timerStart: false,
        sentence: "",
        isLoaded: false,
        currentSentences: [], 
    }


    handleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleTextModal = () => {
        this.setState({
            showTextModal: !this.state.showTextModal,
            isEditing: false
        })

    }

    handleInputChange = (event) => {
        this.setState({
          sentence: event.target.value
        });
    };

    handleSentenceSave = () => {
        this.stopTimer()
        this.setState({
            sentence: "",
            showTextModal: !this.state.showTextModal,
          });

          this.props.setIsEditing("isEditing", false)

          API.saveSentence({
            sentence: this.state.sentence,
            author: "someone new"
          })
            .catch(err => console.log(err));

            window.location.reload()
    }

    handleStart = () => {
        this.setState({
            showTextModal: !this.state.showTextModal,
        })
        // this.startTimer()
    }
    
    startTimer = () => {
        const timerId = setInterval(() => {
            this.setState({
                timer: this.state.timer - 1
            })
            }, 1000)

            this.setState({
                timerId
            })
    }

    stopTimer = () => {
        clearInterval(this.state.timerId)
        this.setState({
            timer: 120
        })
    }

    checkTimer = () => {
        if (this.state.timer <= 0) {
            this.stopTimer()
            this.setState({
                showTextModal: !this.state.showTextModal,
            })
        }
    }

    // checkStatus = () => {
    //     if() {

    //     }
    // }


render() {  
    this.checkTimer()
    
    return (
        <div>
             <p className="misson">Now that you've logged in, have you thought of a sentance you'd like to add? You only get one chances so make it count! Use our dictionary and thesaurus resources if you need help!</p>
            <div className="container">
                <Button 
                onClick={this.handleModal} 
                className="firstModal mainBtn white"
                size="lg"
                >Let's Get Started</Button>
                <Modal
                className="d-flex flex-column align-items-center" 
                show={this.state.showModal} 
                onHide={this.handleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Now when you click the start button you will be able to add your sentence in here.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Click this start button and you will have 2 mins.</p>
                        {/* <Button className="white" onClick={this.handleStart}>Start</Button> */}
                        <StartBtn 
                        onHandleClick={this.handleStart}
                        setIsEditing={this.props.setIsEditing}
                        book={this.props.book}
                        ></StartBtn>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={this.handleModal}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showTextModal} onHide={this.handleTextModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <p>Add your sentence here</p>
                            <div>Time Remaining: {this.state.timer} seconds</div>
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
                            onChange={this.handleInputChange}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    {/* <Button variant="success" className="white" onClick={this.handleSentenceSave}>
                        Save!
                    </Button> */}
                    <CloseBtn  onHandleClick={this.handleSentenceSave}></CloseBtn>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )}}

export default WritingCenter;


