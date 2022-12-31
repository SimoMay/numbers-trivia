import type { PageServerLoad } from './$types';

// 👇 this method will be invoked on BOTH the server and the client, as needed ⚠️
export const load: PageServerLoad = async (event) => {
	// get the query string parameters
	const { url } = event;
    const min = url.searchParams.get('min') || '0';
    const max = url.searchParams.get('max') || '9999999';

	// fetch a new trivia question from http://numbersapi.com
    const urlApi = `http://numbersapi.com/random/trivia?json&min=${min}&max=${max}`;
    console.log(urlApi);
	const response = await fetch(urlApi);

	const trivia = await response.json();
	trivia.text = trivia.text.replace(trivia.number, 'What');
	// return the trivia question as a JSON object
	return {
		trivia
	};
};
