<script lang="ts">
	import type { PageData } from './$types';
	import Trivia from '$lib/components/Trivia.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Numbers Trivia</title>
	<meta name="description" content="Get Your Daily Dose of Trivia with Our Numerical Questions" />
</svelte:head>

<Trivia trivia={data.trivia} />
