import React, { Component } from 'react';
import './App.css';

class DataStructure extends Component {
    render() {

        return (
            //structure and render each data item
            <div>
                <p>ID: {this.props.eachEl.id}</p>
                <p>name: {this.props.eachEl.name}</p>
                <p>username: {this.props.eachEl.username}</p>
                <p>email: {this.props.eachEl.email}</p>
                <p>address</p>
                <li>street: {this.props.eachEl.address.street}</li>
                <li>suite: {this.props.eachEl.address.suite}</li>
                <li>city: {this.props.eachEl.address.city}</li>
                <li>zipcode: {this.props.eachEl.address.zipcode}</li>
                <li>geo lat: {this.props.eachEl.address.geo.lat} geo lng: {this.props.eachEl.address.geo.lng}</li>
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