import {
    AnyAction,
} from 'redux';
import actions from '../actions';

const defaultState = {
	user: null,
};

export default function githubData(state = defaultState, action: AnyAction) {
	switch (action.type) {

	case actions.fetchUserSuccess().type:
		return Object.assign({}, state, {
			user: action.payload,
		});

	default:
		return state;
	}
}
