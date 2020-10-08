import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home"
import Nav from "./components/Nav";
import "./app.css"

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <div className="container">
          <Route path="/" component={Home} />
          {/* <Route exact path="/team" component={Team} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
