import {
    connectRouter,
    RouterState,
} from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux';

const reducers = (history: History) => combineReducers({
	router: connectRouter(history),
});

export interface IState {
    router: RouterState
}

export default reducers;
