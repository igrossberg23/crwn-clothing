import './Button.scss';

const BUTTON_TYPE_CLASSES: Record<string, string> = {
	google: 'google-sign-in',
	inverted: 'inverted',
	default: '',
};

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType?: 'google' | 'inverted' | 'default';
}

const Button = ({
	children,
	buttonType = 'default',
	...otherProps
}: ButtonProps) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default Button;
