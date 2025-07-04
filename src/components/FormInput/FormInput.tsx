import type { FC, InputHTMLAttributes } from 'react';
import { FormInputLabel, Input, Group } from './FormInput.styles';

export type FormInputProps = {
	label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
	label,
	...otherProps
}: FormInputProps) => {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				<FormInputLabel
					shrink={Boolean(
						otherProps.value &&
							typeof otherProps.value === 'string' &&
							otherProps.value.length
					)}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
