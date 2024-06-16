import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/Button/Button';
import styles from './Author.module.css';

function Author({ author, onclickHandler, buttonText }) {
	const { name } = author;
	return (
		<div className={styles.author}>
			<p>{name}</p>
			{buttonText && (
				<Button buttonText={buttonText} onClick={() => onclickHandler(author)} />
			)}
		</div>
	);
}

Author.propTypes = {
	author: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,
	onclickHandler: PropTypes.func.isRequired,
	buttonText: PropTypes.string,
};

export default Author;