import type { User } from 'firebase/auth';
import { createContext, useState } from 'react';

interface UserContextType {
	currentUser: User | null;
	setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType>({
	currentUser: null,
	setCurrentUser: () => null,
});

interface UserContextProviderProps {
	children: React.ReactNode;
}

export const UserProvider = ({ children }: UserContextProviderProps) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};
