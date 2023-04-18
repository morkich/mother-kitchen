<script>
	import RecipeImage from './RecipeImage.svelte';
	import RecipeInfoBottomLine from './RecipeInfoBottomLine.svelte';
	import RecipeIngredientsInfo from './RecipeIngredientsInfo.svelte';
	import RecipeToolsInfo from './RecipeToolsInfo.svelte';

	export let recipeData = {};
	export let toolsData = [];
	export let ingredientsData = [];
</script>

<div class="recipePreview">
	<RecipeImage src={recipeData.image} alt={recipeData.recipeName} />

	<div class="recipeInfo">
		<RecipeIngredientsInfo {ingredientsData} />
		<RecipeToolsInfo {toolsData} />
		<RecipeInfoBottomLine {recipeData} />
	</div>
</div>

<style>
	.recipePreview {
		box-sizing: border-box;
		display: grid;
		grid-gap: 20px;
		width: 100%;
		grid-template-columns: 1.4fr 1fr;
	}

	.recipeInfo {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 15px;
	}
</style>
