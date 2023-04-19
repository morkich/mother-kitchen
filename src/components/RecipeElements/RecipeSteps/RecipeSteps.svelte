<script>
	import TitleH2 from '../../elements/Titles/TitleH2.svelte';
	import Step from './Step.svelte';

	export let steps = [];
</script>

<div class="stepsWrap">
	<TitleH2 title={'Пошаговый рецепт:'} />
	{#each steps as step, index}
		<Step {step} stepNumber={index + 1} />
	{/each}
</div>

<style>
	.stepsWrap {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}
</style>
