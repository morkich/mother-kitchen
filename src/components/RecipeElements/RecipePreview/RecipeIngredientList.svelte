<script>
	import { recipePortionCountStore } from '../../../stores/recipeStore';
	import { capitalizeString } from '../../../functions/words';

	export let ingredientsData = [];

	$: portionsCount = $recipePortionCountStore;

	const getIngredientsMass = (mass, portionCount, unit) => {
		const realMass = mass !== 0 ? mass * portionCount : '';
		return `${realMass} ${unit}`;
	};
</script>

<ul class="ingredientList">
	{#each ingredientsData as ingredientItem, index}
		<li class="ingredientItem">
			<span>{capitalizeString(ingredientItem.title)}</span>
			<span>{getIngredientsMass(+ingredientItem.mass, portionsCount, ingredientItem.unit)}</span>
		</li>
	{/each}
</ul>

<style>
	.ingredientList {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 5px;
	}

	.ingredientItem {
		position: relative;
		display: flex;
		justify-content: space-between;
		color: var(--color-dark-blue);
		overflow: hidden;
	}

	.ingredientItem::after {
		content: '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
		color: var(--color-light-blue);
		white-space: nowrap;
		position: absolute;
		bottom: 0;
		left: 0;
	}
</style>
