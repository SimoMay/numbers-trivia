<script lang="ts">
	import { invalidateAll } from '$app/navigation';

	export let trivia: { text: string; number: number };
	let showAnswer = false;
	let loading = false;

	const toggleAnswer = () => {
		showAnswer = !showAnswer;
	};

	const newTrivia = async () => {
		loading = true;
		showAnswer = false;
		await invalidateAll();
		loading = false;
	};
</script>

{#if loading === true}
	<section>
		<pre>Loading...</pre>
	</section>
{:else}
	<section>
		<pre>Question:</pre>
		<h1>
			{trivia.text}
		</h1>

		<button on:click={() => toggleAnswer()}>
			{#if showAnswer === true}
				Hide Answer
			{:else}
				Show Answer
			{/if}
		</button>

		{#if showAnswer === true}
			<div class="counter">
				<div class="counter-viewport">
					<div class="counter-digits">
						<strong>{trivia.number.toLocaleString('en-US')}</strong>
					</div>
				</div>
			</div>
		{/if}

		<pre>Don't like it?</pre>
		<a href="" on:click={() => newTrivia()}>Get Another Trivia</a>
	</section>
{/if}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
