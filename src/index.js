import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

const target = document.getElementById('root');

render(
    <div className="react-app-form">
        <App />
    </div>, target
);