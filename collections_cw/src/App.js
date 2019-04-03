import React, { Component } from 'react';
import './App.css';
import DataCollector from "./DataCollector";

class App extends Component {

  render() {
    //grab dummy data
    const rawData = require('./rawData');

    return (
      <div>
        <h1 className="App">User Collection App</h1>
        <button onClick={this.changeBack}>Change Background</button>
        {/*pass dummy data to DataCollector.js*/}
        <DataCollector dataArray={rawData} />
      </div>
    );
  }
}

export default App;
