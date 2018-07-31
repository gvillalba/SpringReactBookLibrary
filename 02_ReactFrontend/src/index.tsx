import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { unregister } from './registerServiceWorker';
import { App } from './app';

const content = (
    <App/>
);

ReactDOM.render(
    content,
    document.getElementById('root') as HTMLElement
);

unregister();