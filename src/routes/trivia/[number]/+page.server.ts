import { getTrivia } from '$lib/triviaApi';
import type { PageServerLoad } from '../$types';

// 👇 this method will be invoked on BOTH the server and the client, as needed ⚠️
export const load: PageServerLoad = async ({ params }) => {
	const { number } = params;

	return await getTrivia(number);
};
