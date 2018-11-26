import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@src/store';
import Router from '@src/router';


const App = function () {
	return (
		<Provider store={store}>
			{Router(store)}
		</Provider>
	);
};

export default App;
