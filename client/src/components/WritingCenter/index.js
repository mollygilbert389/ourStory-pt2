import React, {Component} from "react";
import { Button, Modal } from 'react-bootstrap';
import "./style.css";

class WritingCenter extends Component {
    state = {
        showModal: false,
        showTextModal: false,
        timer: "2:00",
        sentance: "",
        isLoaded: false,
        currentSentences: []
    }


    handleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleTextModal = () => {
        this.setState({
            showTextModal: !this.state.showTextModal
        })
    }

    handleInputChange = (event) => {
        this.setState({
          sentence: event.target.value
        });
      };

      handleSentanceSave = () => {
        this.setState({
            sentence: ""
          });
      }
    

render() {  
    
    return (
        
            <div className="container">
            <Button onClick={this.handleModal} className="firstModal">Let's Get Started</Button>
            <Modal
            className="d-flex flex-column align-items-center" 
            show={this.state.showModal} 
            onHide={this.handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Now when you click the start button you will be able to add your sentance in here.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Click this start button and you will have 2 mins.</p>
                    <Button onClick={this.handleTextModal}>Start</Button>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={this.state.showTextModal} onHide={this.handleTextModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p>Add your sentance here</p>
                        <div>Time Remaining: {this.state.timer}</div>
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
                <Button variant="secondary" onClick={this.handleSentanceSave}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )}}

export default WritingCenter;


