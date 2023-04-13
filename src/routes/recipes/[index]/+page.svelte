<script>
	import Meta from '../../../components/Meta.svelte';
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

	$: console.log(recipeData);
</script>

<Meta title={data.pageData.meta.title} description={data.pageData.meta.description} />

<div class="mainWrap">
	<div class="recipeContent">
		<header class="recipeHeader">
			<div class="titleWrap">
				<TitleRecipe title={recipeData.recipeName} />
				<Breadcrumbs pathArray={breadcrumbsArray} />
			</div>

			<SettingsPanel recipeId={recipeData._id} />
		</header>

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

	.recipeHeader {
		display: flex;
		justify-content: space-between;
	}

	.titleWrap {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 5px;
	}
</style>
