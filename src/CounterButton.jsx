import React, { Component } from 'react'

class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    handleClick = () => {
        this.setState(prev => ({
            count: prev.count + 1
        }));
    };
    render() {
        return (
            <div style={{
                padding: '10px', margin: '10px', textAlign: 'center',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: 'lightgray',
                cursor: 'pointer'
            }}>
                <h1>Count :{this.state.count}</h1>
                <button style={{ cursor: "pointer" }} onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }

}
export default CounterButton;