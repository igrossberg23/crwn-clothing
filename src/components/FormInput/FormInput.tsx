import { FormInputLabel, Input, Group } from './FormInput.styles';

export interface FormInputProps {
	label?: string;
	type: string;
	name: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	required?: boolean;
}

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				<FormInputLabel $shrink={!!otherProps.value.length}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
