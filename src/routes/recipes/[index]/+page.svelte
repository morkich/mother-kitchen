<script>
	import Meta from '../../../components/Meta.svelte';
	import RecipeHeader from '../../../components/RecipeElements/SettingsPanel/RecipeHeader/RecipeHeader.svelte';
	import SettingsPanel from '../../../components/RecipeElements/SettingsPanel/SettingsPanel.svelte';
	import Breadcrumbs from '../../../components/elements/Breadcrumbs.svelte';
	import TitleRecipe from '../../../components/elements/Titles/TitleRecipe.svelte';
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

		<div class="recipePreview">
			<div class="recipeImageWrap">
				<img src={recipeData.image} alt="" class="recipeImageImage" />
			</div>

			<div class="recipeInfo">
				<div class="recipeIngredients">
					<div class="infoTitleWrap">
						<h3 class="infoTitle">Состав</h3>
						<div class="portionCount">Количество порций: 4 -+</div>
					</div>
					<ul class="inredientList">
						{#each ingredientsData as ingredientItem, index}
							<li>{ingredientItem.title}....{ingredientItem.mass}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<div class="recipeBody">Шаги и всякое</div>

		<footer class="recipeFooter">Пост описание</footer>
	</div>

	<aside class="aside">Сайдбар</aside>
</div>

<style>
	.mainWrap {
		display: grid;
		grid-template-columns: 1fr 280px;
		grid-gap: 50px;
	}
	.recipeContent {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 25px;
	}
</style>
