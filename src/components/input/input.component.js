import React from 'react';
import './input.style.css';

const InputComponent = ({
	label,
	value,
	name,
	type = 'text',
	handleChange,
}) => {
	return (
		<div className='form-wrapper'>
			<label htmlFor={name} className='form-label'>
				{label}
			</label>
			<input
				type={type}
				className='form-input'
				id={name}
				name={name}
				autoComplete='off'
				required
				value={value}
				onChange={(e) => {
					handleChange(e.target.name, e.target.value);
				}}
			/>
		</div>
	);
};

export default InputComponent;
