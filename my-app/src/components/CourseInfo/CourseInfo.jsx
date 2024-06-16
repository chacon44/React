import { Link, useParams } from 'react-router-dom';

import dateFormater from '../../helpers/dateFormatter';
import formatDuration from '../../helpers/formatDuration';
import Button from '../../common/Button/Button';
import Author from '../CreateCourse/components/Author';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';

import classes from './CourseInfo.module.css';
import { BUTTON_TEXT } from './courseInfoStrings';

const CourseInfo = () => {
	const { id } = useParams();
	const selectedCourse = mockedCoursesList.find((course) => course.id === id);

	return (
		<div className={classes.courseInfoWrapper}>
			<Link to='/courses'>
				<Button buttonText={BUTTON_TEXT.BACK_TO_COURSES} />
			</Link>
			<h2 className={classes.title}>{selectedCourse.title}</h2>
			<div className={classes.courseInfo}>
				<div className={classes.leftBlock}>
					<p>{selectedCourse.description}</p>
				</div>
				<div className={classes.rightBlock}>
					<p>
						<strong>ID: </strong>
						{selectedCourse.id}
					</p>
					<p>
						<strong>Duration: </strong>
						{formatDuration(selectedCourse.duration)} hours
					</p>
					<p>
						<strong>Created: </strong>
						{dateFormater(selectedCourse.creationDate)}
					</p>
					<p>
						<strong>Authors: </strong>
					</p>
					<ul>
						{selectedCourse.authors.map((authorId) => {
							const foundAuthor = mockedAuthorsList.find(
								(author) => author.id === authorId
							);
							return foundAuthor ? (
								<Author key={foundAuthor.id} author={foundAuthor} />
							) : null;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
