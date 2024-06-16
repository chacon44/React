import { mockedAuthorsList } from '../constants';

export default function getAuthors(authorsIdArray) {
	const authorsArray = [];

	authorsIdArray.forEach((authorId) =>
		mockedAuthorsList.forEach((author) => {
			if (author.id === authorId) {
				authorsArray.push(author.name);
			}
		})
	);

	return authorsArray;
}
