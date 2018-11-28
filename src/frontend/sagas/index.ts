import {
	takeLatest,
} from 'redux-saga/effects';
import actions from 'src/frontend/actions';
import {
	// fetchUserError,
	fetchUserStart,
	fetchUserSuccess,
} from './fetchUser';

export default function* sagas() {
	
	// fetch user data
	// yield takeLatest(actions.fetchUserError().type, fetchUserError);
	yield takeLatest(actions.fetchUserStart().type, fetchUserStart);
	yield takeLatest(actions.fetchUserSuccess().type, fetchUserSuccess);
}
