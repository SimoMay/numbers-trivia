import { env } from '$env/dynamic/public';

export const getTrivia = async (number = null, min = '0', max = env.PUBLIC_MAX_TRIVIA_NUMBER) => {
	if (number && isNaN(number)) {
		number = null;
	}
	// fetch a new trivia question from http://numbersapi.com
	const urlApi = number
		? `http://numbersapi.com/${number}/trivia?json`
		: `http://numbersapi.com/random/trivia?json&min=${min}&max=${max}`;
	console.log(urlApi);
	const response = await fetch(urlApi);

	const trivia = await response.json();
	trivia.text = trivia.text.replace(trivia.number, 'What');
	trivia.text = trivia.text.replace('(submit one to numbersapi at google mail!)', '');
	// return the trivia question as a JSON object
	return {
		trivia
	};
};
