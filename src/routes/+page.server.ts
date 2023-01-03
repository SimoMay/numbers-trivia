import type { PageServerLoad } from './$types';
import { getTrivia } from '$lib/triviaApi';
import { env } from '$env/dynamic/public';

// 👇 this method will be invoked on BOTH the server and the client, as needed ⚠️
export const load: PageServerLoad = async ({ url, params }) => {
	const { number } = params;
	const min = url.searchParams.get('min') || '0';
	const max = url.searchParams.get('max') || env.PUBLIC_MAX_TRIVIA_NUMBER;

	return await getTrivia(number, min, max);
};
