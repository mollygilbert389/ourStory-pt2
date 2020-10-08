import React, {Component} from "react";
import "./style.css";

class Book extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="bookDivContainer">
            <div className="rightSide">
                {this.props.bookData.map(item => {return ` ${item.sentence}`})}
            </div>
            <div className="leftSide">
                Left side of book
            </div>
        </div>
      </div>
    );
  }
}

export default Book;