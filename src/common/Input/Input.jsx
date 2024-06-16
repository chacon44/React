import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Input.module.css';

function Input(props) {
	const {
		placeholderText = '',
		onChange,
		labelText = '',
		value,
		name,
		type,
	} = props;

// 	Use of Fragment
	// In React, a Fragment is a way to group a list of children elements without adding extra nodes to the DOM. This is particularly useful when you want to return multiple elements from a component but don't want to wrap them in an unnecessary <div> or other container element.
	
	// In the Input component, Fragment is used to wrap the label and input elements together. This ensures that both elements are returned as a single unit without adding an extra node to the DOM.
	
	return (
		<Fragment>
			{labelText && <label htmlFor={name}>{labelText}</label>}
			<input
				id={name}
				type={type}
				value={value}
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</Fragment>
	);
}

Input.propTypes = {
	name: PropTypes.string.isRequired,
	labelText: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	placeholder: PropTypes.string,
	onChange: PropTypes.func.isRequired,
}
export default Input;
