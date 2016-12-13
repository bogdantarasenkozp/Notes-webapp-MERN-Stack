import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index';
import router from './router';

ReactDOM.render(
	<Provider store={store}>{router}</Provider>,
	document.getElementById('root')
);