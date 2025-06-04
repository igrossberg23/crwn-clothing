import { createSlice } from '@reduxjs/toolkit';

export const INIT_USER_REDUCER = {
	currentUser: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState: INIT_USER_REDUCER,
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
