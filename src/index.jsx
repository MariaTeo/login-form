import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './component/app';

const here = document.getElementById('here')
const app = <App />

render(app, here)
