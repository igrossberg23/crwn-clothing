import type { UnknownAction } from 'redux';
import type { UserData } from '../../utils/firebase/firebase.utils';
import {
	signInFailed,
	signInSuccess,
	signOutFailed,
	signOutSuccess,
	signUpFailed,
} from './user.action';

export type UserState = {
	readonly currentUser: UserData | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

export const INIT_USER_REDUCER: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (
	state = INIT_USER_REDUCER,
	action: UnknownAction
) => {
	if (signInSuccess.match(action)) {
		return {
			...state,
			currentUser: action.payload,
		};
	}

	if (signOutSuccess.match(action)) {
		return {
			...state,
			currentUser: null,
		};
	}

	if (
		signUpFailed.match(action) ||
		signOutFailed.match(action) ||
		signInFailed.match(action)
	) {
		return {
			...state,
			error: action.payload,
		};
	}

	return state;
};
