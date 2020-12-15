import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var element = React.createElement('h1', { className: 'greeting' }, 'Github API Access');
ReactDOM.render(element, document.getElementById('root'));
serviceWorker.unregister();