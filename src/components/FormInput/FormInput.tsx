import './FormInput.scss';

export interface FormInputProps {
	label?: string;
	type: string;
	name: string;
	value: string;
	onChange: React.Dispatch<React.SetStateAction<Object>>;
	required?: boolean;
}

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
	return (
		<div className='group'>
			<input
				className='form-input'
				{...otherProps}
			/>
			{label && (
				<label
					className={`${
						otherProps.value.length ? 'shrink' : ''
					} form-input-label`}>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
