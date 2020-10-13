import React, {Component} from "react";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Book from "../components/Book"
import API from "../utils/API";
import WritingCenter from "../components/WritingCenter"
import Login from "../components/Login"
import Dictionary from "../components/Dictionary"
import {useAuth0} from "@auth0/auth0-react"
import "./style.css";

import {
  setIsEditing,
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

setIsEditing = (destination, value) => {
  const{onSetIsEditing}=this.props
  onSetIsEditing(destination, value)
}

  render() {
    
  return (
    <div>
      {!this.props.book.userData.name && (<div className="misson">Welcome to OurStory! This is a community book writing experiment where users from all over can come and make a single contribution to the book below. You can stay here and read OurStory, or you can sign in and make your own contribution!</div>)}
      <div className="centerItems">
        <Login></Login>
      </div>
      
      {this.props.book.userData.name && (<div>
        <Dictionary></Dictionary> 
        <WritingCenter
        setIsEditing={this.setIsEditing}
        book={this.props.book}
        ></WritingCenter>
        </div>)}
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
  onSetIsEditing: bindActionCreators(setIsEditing, dispatch),
})

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
