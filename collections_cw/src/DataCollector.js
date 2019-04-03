import React, { Component } from 'react';
import './App.css';
import DataStructure from "./DataStructure";

class DataCollector extends Component {
    render() {
        //map dummy data from App.js and send to DataStructure.js
        const mapData = this.props.dataArray.map((eachEl) => {
           return(<DataStructure key={eachEl.id} eachEl={eachEl} />)
        });
        return (
            <div>
                {mapData}
            </div>
        );
    }
}

export default DataCollector;