import React, { Component } from 'react';

import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        if(this.state.count < 1) {
            this.setState({
                count:0
            });
        } else {
            this.setState({
                count: this.state.count - 1
        });
        }
    }

    reset = () => {
        this.setState({ count: 0 });
    }

    render() { 
        return (
        <div className="Counter">
            <h1 className="Counter__title">Click Counter</h1>
            <h1 className="Counter__number">{this.state.count}</h1>
            <div className="Counter__btns">
                <button onClick={this.decrement} className="Counter__btn">-</button>
                <button onClick={this.increment} className="Counter__btn">+</button>
                <br></br>
                <button onClick={this.reset} className="Counter__reset">Reset</button>
            </div>
        </div>
        )
    }
}

export default Counter;