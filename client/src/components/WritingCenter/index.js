import React, {Component} from "react";
import { Button, Modal } from 'react-bootstrap';
import "./style.css";

class WritingCenter extends Component {
    state = {
        showModal: false,
        showTextModal: false,
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

render() {   
    return (
            <div className="container">
            <Button onClick={this.handleModal} className="firstModal">Let's Get Started</Button>
            <Modal show={this.state.showModal} onHide={this.handleModal}>
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
                        <p>Add your Text here</p>
                        <div>Time Remaining: 10</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea className="textArea"></textarea>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleTextModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )}}

export default WritingCenter;


