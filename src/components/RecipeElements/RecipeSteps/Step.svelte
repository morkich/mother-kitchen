<script>
	import StepDescription from './StepDescription.svelte';
	import StepImage from './StepImage.svelte';
	import StepInfo from './StepInfo.svelte';

	export let step = {};
	export let stepNumber = 0;
</script>

<div class="stepWrap">
	<StepInfo {stepNumber} stepTime={step.stepCookingTime} />
	<StepImage src={step.stepImage} alt={`шаг ${stepNumber}`} />
	<StepDescription
		description={step.stepText}
		stepTools={step.stepTools}
		stepIngredients={step.stepIngredients}
	/>
</div>

<style>
	.stepWrap {
		display: grid;
		grid-template-columns: 50px 1fr 1.8fr;
		grid-gap: 10px;
	}
</style>
