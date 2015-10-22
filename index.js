import React from 'react';
import ReactDOM from 'react-dom/server';

class Papagaio extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

console.log(
    ReactDOM.renderToString(
        <Papagaio>
            Harri? <br/>
            Harri!
        </Papagaio>
    )
);