import React, { Component } from 'react';
import './App.css';

const user = {
    firstName: 'Roman',
    lastName: 'Hrechuk',
};

class App extends Component {
    formatName = user => `${ user.firstName } ${ user.lastName }`

    render() {
        return (
            <h1>Hello, { this.formatName(user) }</h1>
        );
    }
}

export default App;
