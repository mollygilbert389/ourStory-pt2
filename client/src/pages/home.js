import React, {Component} from "react";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Book from "../components/Book"
import API from "../utils/API";
import WritingCenter from "../components/WritingCenter"
import "./style.css";

import {
  setSentenceData,
} from "../actions/index"

class Home extends Component {
  state = {
    currentSentences: []
  }

  componentDidMount() {
    function loadSentences() {
    API.getSentences()
      .then(res => res.data)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            currentSentences: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      .catch(err => console.log(err));
    }
    
    loadSentences.call(this)
}


  render() {
  return (
    <div>
      <WritingCenter
      // setSentenceData={this.setSentenceData}
      >
      </WritingCenter>
      <Book
      bookData={this.state.currentSentences}
      >
      </Book>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {book: state.bookReducer}
}

const mapDispatchtoProps = (dispatch) => ({
  // onSetSentenceData: bindActionCreators(setSentenceData, dispatch),
})

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
