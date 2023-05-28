<script>
	import Meta from '../../../components/Meta.svelte';

	export let data;

	console.log(data);
</script>

<Meta title={data.pageData.meta.title} description={data.pageData.meta.description} />
Лист с рецептами!
