import type { User } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

interface UserContextType {
	currentUser: User | null;
	setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType>({
	currentUser: null,
	setCurrentUser: () => null,
});

interface UserProviderProps {
	children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user: User | null) => {
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
