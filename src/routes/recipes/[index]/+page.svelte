<script>
	import Meta from '../../../components/Meta.svelte';
	import RecipeHeader from '../../../components/RecipeElements/RecipeHeader/RecipeHeader.svelte';
	import RecipePreview from '../../../components/RecipeElements/RecipePreview/RecipePreview.svelte';
	import FootNote from '../../../components/elements/Text/FootNote.svelte';
	import { initRecipeStoresThunk } from '../../../stores/recipeStore';
	export let data;

	$: recipeData = data.recipeData;
	$: authorData = data.authorData;
	$: ingredientsData = data.ingredientsData;
	$: toolsData = data.toolsData;
	$: categoriesData = data.categoriesData;
	$: breadcrumbsArray = getBreadcrumbsArray(categoriesData, recipeData);

	$: if (recipeData) {
		initRecipeStoresThunk(recipeData);
	}

	const getBreadcrumbsArray = (categoriesData, recipeData) => {
		return [
			{ title: 'главная', url: '/' },
			{
				title: categoriesData[0].title.toLowerCase(),
				url: `/categories/${categoriesData[0].alias}`
			},
			{ title: recipeData.recipeName.toLowerCase() }
		];
	};
</script>

<Meta title={data.pageData.meta.title} description={data.pageData.meta.description} />

<div class="mainWrap">
	<div class="recipeContent">
		<RecipeHeader title={recipeData.recipeName} recipeId={recipeData._id} {breadcrumbsArray} />
		<RecipePreview {recipeData} {toolsData} {ingredientsData} />

		<div class="recipeBody">
			<FootNote content={recipeData.beforeText} columnsCount={1} />
			Шаги и всякое
		</div>
		<footer class="recipeFooter">
			<FootNote content={recipeData.afterText} columnsCount={2} />
		</footer>
	</div>

	<aside class="aside">Сайдбар</aside>
</div>

<style>
	.mainWrap {
		display: grid;
		grid-template-columns: 1fr 280px;
		grid-gap: 50px;
	}
	.recipeBody {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 30px;
	}
	.recipeContent {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 25px;
		width: 100%;
	}
</style>
