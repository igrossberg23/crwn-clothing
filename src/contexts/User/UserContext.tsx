import { createContext, useEffect, useReducer } from 'react';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from '../../utils/firebase/firebase.utils';
import type { NullableUser } from '../../types';
import {
	INIT_USER_REDUCER,
	USER_ACTION_TYPES,
	userReducer,
} from './userReducer';
import { createAction } from '../../utils/reducer/reducer.utils';

interface UserContextType {
	currentUser: NullableUser;
	setCurrentUser: (user: NullableUser) => void;
}

export const UserContext = createContext<UserContextType>({
	currentUser: null,
	setCurrentUser: () => null,
});

interface UserProviderProps {
	children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [{ currentUser }, dispatch] = useReducer(
		userReducer,
		INIT_USER_REDUCER
	);

	const setCurrentUser = (user: NullableUser) => {
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user: NullableUser) => {
			if (user) createUserDocumentFromAuth(user);

			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};
