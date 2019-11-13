import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Header from "./components/Header";
import Form from "./components/Form";

import "./styles/styles.scss";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default hot(module)(App);