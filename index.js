import React from 'react';
import ReactDOM from 'react-dom/server';

class Papagaio extends React.Component {
    render() {
        return (
            <div>{this.props.say}</div>
        )
    }
}

console.log(ReactDOM.renderToString(<Papagaio say="Harri?" />));