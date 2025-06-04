import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore';
import type { NullableUser, ShopCategory, userAuthDetails } from '../../types';

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

export const addCollectionAndDocuments = async (
	collectionKey: string,
	objectsToAdd: ShopCategory[]
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log('done adding collection');
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');

	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);

	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

	// const categoryMap = querySnapshot.docs.reduce(
	// 	(acc: Record<string, Product[]>, docSnapshot) => {
	// 		const { title, items } = docSnapshot.data();
	// 		acc[title.toLowerCase()] = items;
	// 		return acc;
	// 	},
	// 	{}
	// );
};

export const createUserDocumentFromAuth = async (
	userAuth: any,
	additionalDetails: userAuthDetails = {}
) => {
	if (!userAuth) return;

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
				...additionalDetails,
			});
		} catch (error: any) {
			console.log('error creating the user ', error.message);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (
	callback: (user: NullableUser) => void
) => onAuthStateChanged(auth, callback);
