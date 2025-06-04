import {
	BaseButton,
	ButtonSpinner,
	GoogleSignInButton,
	InvertedButton,
} from './Button.styles';

type ButtonTypeOption = 'google' | 'inverted' | 'base';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType?: ButtonTypeOption;
	isLoading?: boolean;
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
	isLoading,
	...otherProps
}: ButtonProps) => {
	const CustomButton = getButton(buttonType);

	return (
		<CustomButton
			disabled={isLoading}
			{...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};

export default Button;
