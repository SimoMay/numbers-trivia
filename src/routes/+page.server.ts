
import type { PageLoad } from './$types';

// 👇 this method will be invoked on BOTH the server and the client, as needed ⚠️
export const load: PageLoad = async () => {
  // fetch a new trivia question from http://numbersapi.com
    const response = await fetch('http://numbersapi.com/random/trivia?json&max=9999999');

    const trivia = await response.json();
    trivia.text = trivia.text.replace(trivia.number, 'What');
    // return the trivia question as a JSON object
    return {
        trivia
    };
}