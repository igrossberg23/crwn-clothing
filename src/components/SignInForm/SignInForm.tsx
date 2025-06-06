import { useState, type FormEvent, type ChangeEvent } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { ButtonsContainer, SignInContainer } from './SignInForm.styles';
import { useDispatch } from 'react-redux';
import {
	emailSignInStart,
	googleSignInStart,
} from '../../store/user/user.action';
import { AuthErrorCodes, type AuthError } from 'firebase/auth';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const dispatch = useDispatch();

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));

			resetFormFields();
		} catch (error) {
			if (
				(error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD ||
				(error as AuthError).code === AuthErrorCodes.INVALID_EMAIL ||
				(error as AuthError).code === AuthErrorCodes.CREDENTIAL_MISMATCH
			) {
				alert('Incorrect email/password combination');
			} else {
				console.log({ error });
				alert('Unknown error occurred');
			}
		}
	};

	const handleGoogleSignIn = async () => {
		dispatch(googleSignInStart());
	};

	return (
		<SignInContainer>
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
				<ButtonsContainer>
					<Button type='submit'>Sign In</Button>
					<Button
						buttonType='google'
						type='button'
						onClick={handleGoogleSignIn}>
						Google Sign In
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
