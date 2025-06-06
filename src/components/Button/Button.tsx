import { type FC, type ButtonHTMLAttributes } from 'react';
import {
	BaseButton,
	ButtonSpinner,
	GoogleSignInButton,
	InvertedButton,
} from './Button.styles';

type ButtonTypeOption = 'google' | 'inverted' | 'base';

const getButton = (buttonType: ButtonTypeOption): typeof BaseButton =>
	({
		base: BaseButton,
		google: GoogleSignInButton,
		inverted: InvertedButton,
	}[buttonType]);

export type ButtonProps = {
	buttonType?: ButtonTypeOption;
	isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
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
