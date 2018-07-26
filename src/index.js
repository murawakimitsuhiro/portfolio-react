import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App greet={'index.JSから送った値'} />,
    document.getElementById('root')
);

registerServiceWorker();
