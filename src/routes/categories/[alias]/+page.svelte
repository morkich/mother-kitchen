<script>
	import Meta from '../../../components/Meta.svelte';
	export let data;

	$: categoryName = data.pageData.categoryData.title;

	console.log(data);
</script>

<Meta title={data.pageData.meta.title} description={data.pageData.meta.description} />

Страница конкретной категории {categoryName}
