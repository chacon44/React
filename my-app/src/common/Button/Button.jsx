import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

// provided default props for type and buttonText to ensure the component behaves correctly even if these props are not provided.
function Button({ buttonText = 'Click me', onClick, type = 'button' }) {
	return (
		<button type={type} className={styles.button} onClick={onClick}>
			{buttonText}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	buttonText: PropTypes.string,
}

export default Button;
