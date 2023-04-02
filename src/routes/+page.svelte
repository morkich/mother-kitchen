<script>
	import Categories from '../components/elements/Categories/Categories.svelte';
	import Meta from '../components/Meta.svelte';

	export let data;
</script>

<Meta title={data.pageData.meta.title} description={data.pageData.meta.description} />

Главная страница
<Categories items={data.pageData.categoriesData} />
