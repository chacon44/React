import { Link } from 'react-router-dom';

import Button from '../../../../common/Button/Button';
import formatDuration from '../../../../helpers/formatDuration';
import getAuthors from '../../../../helpers/authorsGetter';
import dateFormater from '../../../../helpers/dateFormatter';

import styles from './CourseCard.module.css';

function CourseCard(props) {
	const { id, title, description, creationDate, duration, authors } = props;
	const courseAuthors = getAuthors(authors).join(', ');

	return (
		<div className={styles.card}>
			<div className={styles.cardLeft}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.cardRight}>
				<p className={styles.authors}>
					<strong>Authors: </strong>
					{courseAuthors}
				</p>
				<p className={styles.duration}>
					<b>Duration: </b>
					{formatDuration(duration)}
				</p>
				<p className={styles.created}>
					<strong>Created: </strong>
					{dateFormater(creationDate)}
				</p>
				<div className={styles.buttonBlock}>
					<Link to={`/courses/${id}`}>
						<Button className='cardButton' buttonText='Show course'></Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
