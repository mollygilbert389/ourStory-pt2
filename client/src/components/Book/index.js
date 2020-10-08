import React from "react";
import "./style.css";


function Book(props){
    const bookData = props.bookData.reverse()
    const firstPage = bookData.slice(0,15)
    const secondPage = bookData.slice(15)
    return (
      <div className="mainDiv">
        <div className="bookDivContainer">
            <div className="rightSide">
                {firstPage.map(item => {return ` ${item.sentence}`})}
            </div>
            <div className="leftSide">
                {secondPage.map(item => {return ` ${item.sentence}`})}
            </div>
        </div>
      </div>
    );
}

export default Book;