<script>
	import TitleH3 from '../../elements/Titles/TitleH3.svelte';
	import PortionCount from './PortionCount.svelte';
	import RecipeIngredientList from './RecipeIngredientList.svelte';

	export let ingredientsData = [];
</script>

<div class="recipeIngredients">
	<div class="infoTitleWrap">
		<TitleH3 title={'Состав:'} />
		<PortionCount />
	</div>
	<RecipeIngredientList {ingredientsData} />
</div>

<style>
	.recipeIngredients {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 10px;
	}

	.infoTitleWrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
