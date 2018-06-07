import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './utils/store'

import App from './components/application/component';
import 'semantic-ui-css/semantic.min.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
