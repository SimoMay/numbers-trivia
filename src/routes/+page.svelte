<script lang="ts">
	import type { PageData } from './$types';
	import Trivia from '$lib/components/Trivia.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Numbers Trivia</title>
	<meta name="description" content="Unlimited Trivia Quesions with Numbers for Answers" />
</svelte:head>

<Trivia trivia={data.trivia} />
