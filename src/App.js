import React, { Component } from 'react';
import './App.css';

class Test extends Component {
    state = {
        name: 'World',
    }

    onChange = e => {
        let { value } = e.currentTarget;

        this.setState({ name: value.trim() });
    }

    render() {
        return(
            <div>
                <input type="text" onChange={ this.onChange }/>
                <App name={ this.state.name }/>
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        console.log('CONSTRUCTOR');
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        console.log('state:', this.state);
        console.log('props:', this.props);

        this.setState({
            count: this.state.count + 1
        });
    }

    componentWillMount() {
        console.log('COMPONENT WILL MOUNT');
    }

    render() {
        console.log('RENDER');

        return (
            <div>
                <h1>Hello, World!!! { this.state.count }</h1>
                <button onClick={ this.onClick }>Press Me!</button>
            </div>
        );
    }

    componentDidMount() {
        console.log('COMPONENT DID MOUNT');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('SHOULD COMPONENT UPDATE');
        console.log('nextState', nextState);
        console.log('nextProps', nextProps);
        return true;
    }

    // не сработают если метод shouldComponentUpdate не вернет 'true' - START
    componentWillUpdate(nextProps, nextState) {
        console.log('COMPONENT WILL UPDATE');
        console.log('nextState', nextState);
        console.log('nextProps', nextProps);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('COMPONENT DID UPDATE');
        console.log('prevState', prevState);
        console.log('prevProps', prevProps);
    }
    // не сработают если метод shouldComponentUpdate не вернет 'true' - END

    componentWillReceiveProps(nextProps) {
        console.log('COMPONENT WILL RECEIVE PROPS');
        console.log('nextProps', nextProps);
    }

    componentWillUnmount() {
        console.log('COMPONENT WILL UNMOUNT');
    }
}

// export default App;
export default Test;
