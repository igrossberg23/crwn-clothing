import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { SignUpContainer } from './SignUpForm.styles';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			const userCredential = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			if (!userCredential) throw new Error('Failed to create user auth');

			const userDocRef = await createUserDocumentFromAuth(userCredential.user, {
				displayName,
			});
			if (!userDocRef) throw new Error('Failed to get userDocRef');

			resetFormFields();
		} catch (error: any) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user: email already in use');
			} else {
				console.log(error.message);
			}
		}
	};

	return (
		<SignUpContainer>
			<h2>Don&apos;t have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					required
				/>
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
				<FormInput
					label='Confirm Password'
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					required
				/>
				<Button type='submit'>Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
