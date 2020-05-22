import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApplicationStore from './ApplicationStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ApplicationStore />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
