import { getTrivia } from '$lib/triviaApi';
import type { PageServerLoad } from '../$types';

// 👇 this method will be invoked on BOTH the server and the client, as needed ⚠️
export const load: PageServerLoad = async (event) => {
	// get the query string parameters
	const { url, params } = event;
	const { number } = params;
    const min = url.searchParams.get('min') || '0';
    const max = url.searchParams.get('max') || '9999999';

	return await getTrivia(number, min, max);
};
