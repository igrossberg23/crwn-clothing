import { useState, type ChangeEvent, type FormEvent } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { SignUpContainer } from './SignUpForm.styles';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import { AuthErrorCodes, type AuthError } from 'firebase/auth';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	const dispatch = useDispatch();

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			dispatch(signUpStart(email, password, displayName));

			resetFormFields();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Cannot create user: email already in use');
			} else {
				console.log({ error });
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
