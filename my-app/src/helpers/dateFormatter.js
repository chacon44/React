export default function dateFormater(date) {
	return date
		.split('/')
		.map((e) => (e.length === 1 ? `0${e}` : e))
		.join('.');
}
