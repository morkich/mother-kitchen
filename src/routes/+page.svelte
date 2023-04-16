<script>
	import Categories from '../components/elements/Categories/Categories.svelte';
	import Meta from '../components/Meta.svelte';

	export let data;
</script>

<Meta title={data.pageData.meta.title} description={data.pageData.meta.description} />

Главная страница
<Categories items={data.pageData.categoriesData} />

<a href="http://localhost:5173/recipes/643bb2d74d57b129251804d0/">тестовый рецепт</a>
