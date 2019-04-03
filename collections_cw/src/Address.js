import React, { Component } from 'react';
import './App.css';

class Address extends Component {
    render() {
        return (
            <div>
                <li>street: {this.props.address.street}</li>
                <li>suite: {this.props.address.suite}</li>
                <li>city: {this.props.address.city}</li>
                <li>zipcode: {this.props.address.zipcode}</li>
                <li>geo lat: {this.props.address.geo.lat} geo lng: {this.props.address.geo.lng}</li>
            </div>
        );
    }
}

export default Address;