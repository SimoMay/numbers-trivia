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

	// remove the answers from the trivia question, TODO: might need to add "flag" trivia questions
	const leakedAnswers = [
		'(108 divided by 4)',
		", giving the name to Ray Bradbury's novel Fahrenheit 451",
		'(78 AM gongs and 78 PM gongs)',
		' 149 times',
		'(22 regular letters and 5 final consonants)',
		'(submit one to numbersapi at google mail!)'
	];
	leakedAnswers.forEach((answer) => {
		trivia.text = trivia.text.replace(answer, '');
	});

	// return the trivia question as a JSON object
	return {
		trivia
	};
};
