<script>
	import { capitalizeString } from '../../../functions/words';
	import { recipeIngredientsStore, recipeToolsStore } from '../../../stores/recipeStore';
	import InfoItem from '../../elements/Text/InfoItem.svelte';

	export let description = '';
	export let stepTools = [];
	export let stepIngredients = [];

	$: stepIngredientsIds = stepIngredients.map((ingredientItem) => ingredientItem.ingredientId);

	const getStepTools = (store, stepData, needField) => {
		const needData = store.filter((storeItem) => stepData.includes(storeItem._id));
		const dataTitles = needData.map((item) => item[needField]);
		return capitalizeString(dataTitles.join(', '));
	};
</script>

<div class="stepDescription">
	<div class="descriptionInfo">
		<InfoItem
			title={'Продукты:'}
			stringList={getStepTools($recipeIngredientsStore, stepIngredientsIds, 'title')}
		/>
		<InfoItem
			title={'Инструменты:'}
			stringList={getStepTools($recipeToolsStore, stepTools, 'name')}
		/>
	</div>
	<p class="stepParagraph">{description}</p>
</div>

<style>
	.stepDescription {
		padding: 10px;
		display: grid;
		grid-template-columns: 1fr;
		align-content: space-between;
	}
	.descriptionInfo {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 10px;
	}

	.stepParagraph {
		margin: 0;
		padding: 0;
		font-family: var(--font-main);
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		color: var(--color-dark-blue);
	}
</style>
