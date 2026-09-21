import React from 'react';
import './Square.css';

class Square extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 240
        };
    }

    changeSize = (event) => {
        this.setState({
            size: event.target.value
        });
    };

    render() {
        return (
            <div className="container">
                <h2>Выберите размер квадрата:</h2>

                <input
                    type="range"
                    min="100"
                    max="400"
                    value={this.state.size}
                    onChange={this.changeSize}
                />

                <p>
                    {this.state.size}px * {this.state.size}px
                </p>

                <div
                    className="square"
                    style={{
                        width: this.state.size + "px",
                        height: this.state.size + "px"
                    }}
                ></div>
            </div>
        );
    }
}

export default Square;