import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignIn = () => {
	return (
		<div>
			<h1>Sign In Page</h1>
			<div style={{ display: 'flex', gap: '10px' }}>
				<SignInForm />
				<SignUpForm />
			</div>
		</div>
	);
};

export default SignIn;
