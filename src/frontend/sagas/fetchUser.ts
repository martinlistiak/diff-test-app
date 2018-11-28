import {
    AnyAction,
} from 'redux';
import {
	call,
	put,
} from 'redux-saga/effects';
import {
    AxiosBaseClient,
} from 'src/clients';
import actions from 'src/frontend/actions';
import {
    history,
    // store,
} from 'src/frontend/store';

export function* fetchUserStart(action: AnyAction) {
    try {
        const getUserData = async () => await AxiosBaseClient.get(`/user/${action.payload.username}`);

		const response = yield call(getUserData);
		yield put(actions.fetchUserSuccess(response));
	} catch (err) {
		yield put(actions.fetchUserError(err));
	}
}

export function* fetchUserSuccess(action: AnyAction) {
	const redirect = () => (history.push('/admin'));
	yield call(redirect);
}
