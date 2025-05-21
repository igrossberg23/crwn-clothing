import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from './Button.styles';

type ButtonTypeOption = 'google' | 'inverted' | 'base';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType?: ButtonTypeOption;
}

const getButton = (buttonType: ButtonTypeOption) =>
	({
		base: BaseButton,
		google: GoogleSignInButton,
		inverted: InvertedButton,
	}[buttonType]);

const Button = ({
	children,
	buttonType = 'base',
	...otherProps
}: ButtonProps) => {
	const CustomButton = getButton(buttonType);

	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
