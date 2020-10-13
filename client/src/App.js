import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home"
import Header from "./components/Header";
import Footer from "./components/Footer"
import {useAuth0} from "@auth0/auth0-react"
import "./app.css"
import "./scss/Custom.scss"

import {Provider} from "react-redux"
import store from "./store"




function App() {
  const {user, isAuthenticated} = useAuth0();
  const savetoRedux = () => {
    if (user) {
      store.dispatch({type:"SAVE_USER_DATA", user})
    }
  }

  savetoRedux()
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header

          />
          <div className="container">
            <Route path="/" component={Home} />
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
