import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import {
	applyMiddleware,
	compose,
	createStore,
} from 'redux';
import freeze from 'redux-freeze';
import createSagaMiddleware from 'redux-saga';
import reducers from 'src/frontend/reducers';
import sagas from 'src/frontend/sagas';

// create history object
const history = createBrowserHistory()

// add the middlewares
const middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(history));

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
if (process.env.NODE_ENV === 'local') {
	middleware = compose(
		middleware,
  		(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
	);
}

// create the store
const store = createStore(reducers(history), middleware);
sagaMiddleware.run(sagas);

// export
export {
	store,
	history,
};
