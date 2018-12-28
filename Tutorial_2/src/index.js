import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
    render () {
        return <div className='message-box'>
            Hello {this.props.name}
        </div>
    }
}

ReactDOM.render(<Hello name='John' />, document.getElementById('app'));
