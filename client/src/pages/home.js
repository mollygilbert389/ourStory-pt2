import React from "react";
import Book from "../components/Book"
import WritingCenter from "../components/WritingCenter"
import "./style.css";

function Home() {
  return (
    <div>
      <WritingCenter></WritingCenter>
      <Book></Book>
    </div>
  );
}

export default Home;
