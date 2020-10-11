import React, {Component} from "react";
import "./style.css";
import {Button, Card, Form, Tabs, Tab} from "react-bootstrap";
const axios = require('axios')

class Dictionary extends Component {
    state = {
        wordInput: "",
        message: [],
        synonyms: [],
        definitions: [],
    }
    
    searchWord = (event) => {
        const selection = event.target.name
        let key = ""
        let url = ""
        let word = this.state.wordInput.trim() 

        if(selection === "dictionary") {
            console.log("dic")
            key = process.env.REACT_APP_DICTIONARY_KEY
            url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=' + key
        } 
        
        if (selection === "thesaurus") {
            console.log("the")
            key = process.env.REACT_APP_THESAURUS_KEY
            url = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/" + word + "?key=" + key 
        }


        
        axios.get(url)
        .then(response => {
            console.log(response)
            if(response.data[0]) {
                if (selection === "dictionary") {
                    this.setState({
                        definitions: response.data[0].shortdef
                    })
                } 
                if (selection === "thesaurus") {
                    this.setState({
                        synonyms: response.data[0].meta.syns[0]
                    })
                }

            } else {
                this.setState({
                    message: ["This word can't be found."]
                })
            }
        })
        .catch(function (error) {console.log(error)})
    }

    handleChange = (event) => {
        this.setState({
            wordInput: event.target.value
        })
    }

render() {
    return (
      <div>
          <Button className="dictionaryBtn white">Dictionary</Button>
          <div>

            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Dictionary</Card.Header>
                <Card.Body>
                <Card.Title>Search for words below.</Card.Title>
                <Tabs defaultActiveKey="dictionary" id="uncontrolled-tab-example">
                    <Tab eventKey="dictionary" title="Dictionary">
                        <br></br>
                        <div className="miniForm">
                            <Form.Control type="word" placeholder="word" value={this.state.value} onChange={this.handleChange}/>
                            <Button name="dictionary"
                            variant="primary"
                            onClick={this.searchWord}
                            >Search</Button>
                        </div>
                        <br></br>

                    </Tab>
                    <Tab eventKey="thesaurus" title="Thesaurus">
                        <br></br>
                        <div className="miniForm">
                            <Form.Control type="word" placeholder="word" value={this.state.value} onChange={this.handleChange}/>
                            <Button name="thesaurus"
                            variant="primary"
                            onClick={this.searchWord}
                            >Search</Button>
                        </div>
                        <br></br>
                    </Tab>
                </Tabs>

                <Card.Text>
                            {this.state.definitions && (this.state.definitions.map((definition, index) => {return <div><strong>Definition {index +1}: </strong>{definition}</div>}))}
                            {this.state.synonyms && (this.state.synonyms.map((synonym) => {return <div className="giveMeSpace">{synonym}</div>}))}
                        </Card.Text>

                <Button variant="danger">Close</Button>
                </Card.Body>
            </Card>
          </div>
      </div>
    );
    }
}

export default Dictionary;