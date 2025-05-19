import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDOhoCKaD15Wb_8IZzqo2sVHGZh7QoroeU',
	authDomain: 'crwn-clothing-db-ee5fe.firebaseapp.com',
	projectId: 'crwn-clothing-db-ee5fe',
	storageBucket: 'crwn-clothing-db-ee5fe.firebasestorage.app',
	messagingSenderId: '395342384622',
	appId: '1:395342384622:web:1219017a1dd92f32cd12ff',
};

export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: any) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error: any) {
			console.log('error creating the user ', error.message);
		}
	}

	return userDocRef;
};
