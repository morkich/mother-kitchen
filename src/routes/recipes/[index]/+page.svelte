<script>
	import Meta from '../../../components/Meta.svelte';
	export let data;

	$: recipeData = data.recipeData;
	$: authorData = data.authorData;
	// $: console.log(recipeData, authorData);
</script>

<Meta title={data.pageData.meta.title} description={data.pageData.meta.description} />

<h1>{recipeData.recipeName}</h1>
Страница конкретного рецепта
