import { useContext, useState } from 'react';
import './SignInForm.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import {
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/UserContext';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleChange = (event: any) => {
		const { name, value } = event.target;

		setFormFields((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const userCredential = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			if (!userCredential)
				throw new Error('Something went wrong getting user auth');

			const userDocRef = await createUserDocumentFromAuth(userCredential.user);
			if (!userDocRef) throw new Error('Failed to get userDocRef');

			setCurrentUser(userCredential.user);
			resetFormFields();
		} catch (error: any) {
			switch (error.code) {
				case 'auth/wrong-password':
				case 'auth/user-not-found':
					alert('Sign in failed: Invalid credentials');
					break;
				default:
					alert('Unknown error occurred');
			}
			console.log('Failed to log in...', error);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			const userCredential = await signInWithGooglePopup();
			if (!userCredential)
				throw new Error('Something went wrong getting user auth');

			const userDocRef = await createUserDocumentFromAuth(userCredential.user);
			if (!userDocRef) throw new Error('Failed to get userDocRef');

			setCurrentUser(userCredential.user);
		} catch (error) {
			console.log('Failed to log in with Google', error);
		}
	};

	return (
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					required
				/>
				<FormInput
					label='Password'
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					required
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button
						buttonType='google'
						type='button'
						onClick={handleGoogleSignIn}>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
