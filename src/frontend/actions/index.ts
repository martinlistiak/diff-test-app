import { createAction } from 'redux-actions';

const actions = {
	fetchUserError: createAction('FETCH_USER_ERROR'),
	fetchUserStart: createAction('FETCH_USER_START'),
	fetchUserSuccess: createAction('FETCH_USER_SUCCESS'),
};

export default actions;
