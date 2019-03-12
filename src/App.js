import React, { Component } from "react";
import "./App.css";

import { CountryContainer } from "./containers/CountryContainer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-title">Destination Dictionary</p>
        </header>
        <div className="App-body">
          <CountryContainer />
        </div>
      </div>
    );
  }
}
