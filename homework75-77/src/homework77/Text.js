import React from 'react';
import './Text.css';

class Text extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showText: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showText: false
            });
        }, 2000);
    }

    render() {
        return (
            <div className="text">
                {this.state.showText && (
                    <p>
                        Hello, World!
                    </p>
                )}
            </div>
        );
    }
}

export default Text;