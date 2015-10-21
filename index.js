import React from 'react';
import ReactDOM from 'react-dom/server';

class Harri extends React.Component {
    render() {
        return (
            <div>Harri!</div>
        )
    }
}

console.log(ReactDOM.renderToString(<Harri />));