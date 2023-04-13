<script>
	import Categories from '../components/elements/Categories/Categories.svelte';
	import Meta from '../components/Meta.svelte';

	export let data;
</script>

<Meta title={data.pageData.meta.title} description={data.pageData.meta.description} />

Главная страница
<Categories items={data.pageData.categoriesData} />

<a href="http://localhost:5173/recipes/64346148eda2b19b65a61e78/">тестовый рецепт</a>
