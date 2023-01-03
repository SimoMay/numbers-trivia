<script lang="ts">
	import type { PageData } from './$types';
	import Trivia from '$lib/components/Trivia.svelte';
	import { env } from '$env/dynamic/public';

	export let data: PageData;
</script>

<svelte:head>
	<title>Numbers Trivia</title>
	<meta name="description" content="Numbers Trivia" />
</svelte:head>

<Trivia trivia={data.trivia} />
{#if data.trivia.number >= parseInt(env.PUBLIC_MAX_TRIVIA_NUMBER)}
	<a href="/trivia/1">Go Back to Number 1</a>
{:else}
	<a href="/trivia/{data.trivia.number + 1}">Next Number</a>
{/if}
