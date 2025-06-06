import type { RootState } from '../store';
import type { UserState } from './user.reducer';
import { createSelector } from 'reselect';

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
	[selectUserReducer],
	(user) => user.currentUser
);
