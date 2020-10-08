import React from "react";
import "./style.css";

function Book() {
  return (
    <div className="mainDiv">
       <div className="bookDivContainer">
          <div className="rightSide">
              Right side Book
          </div>
          <div className="leftSide">
              Left side of book
          </div>
       </div>
    </div>
  );
}

export default Book;