import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home"
import Header from "./components/Header";
import Footer from "./components/Footer"
import "./app.css"
import "./scss/Custom.scss"

import {Provider} from "react-redux"
import store from "./store"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header/>
          <div className="container">
            <Route path="/" component={Home} />
            {/* <Route exact path="/team" component={Team} /> */}
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
