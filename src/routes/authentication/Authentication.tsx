import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { AuthenticationContainer } from './Authentication.styles';

const Authentication = () => {
	return (
		<AuthenticationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthenticationContainer>
	);
};

export default Authentication;
