import React, { Component } from 'react';
import './App.css';
import Address from "./Address";

class DataStructure extends Component {
    //on click console log item key
    logKey = (e) =>{
        console.log(this.props.eachEl.id)
    };

    render() {

        return (
            //structure and render each data item
            <div onClick={this.logKey}>
                <p>ID: {this.props.eachEl.id}</p>
                <p>name: {this.props.eachEl.name}</p>
                <p>username: {this.props.eachEl.username}</p>
                <p>email: {this.props.eachEl.email}</p>
                <p>Address</p>
                <Address address={this.props.eachEl.address}/>
                <p>phone number: {this.props.eachEl.phone}</p>
                <p>website: {this.props.eachEl.website}</p>
                <p>company</p>
                <li>name: {this.props.eachEl.company.name}</li>
                <li>catchPhrase: {this.props.eachEl.company.catchPhrase}</li>
                <li>bs: {this.props.eachEl.company.bs}</li>
                <hr/>
            </div>
        );
    }
}

export default DataStructure;