import {
	createStore,
	applyMiddleware,
	compose,
} from 'redux';
import { browserHistory } from 'react-router';
import {
	syncHistoryWithStore,
	routerMiddleware,
} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import freeze from 'redux-freeze';
import reducers from '@src/reducers';
import sagas from '@src/sagas';

// add the middlewares
const middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the freeze dev middleware
if (process.env.NODE_ENV === 'local') {
	middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV === 'local' && window.devToolsExtension) {
	middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

// export
export {
	store,
	history,
};
