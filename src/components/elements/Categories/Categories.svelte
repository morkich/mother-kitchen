<script>
	import CategoryLink from './CategoryLink.svelte';

	export let items = [];
</script>

<div class="categoriesWrap">
	{#each items as categoryItem, index}
		<CategoryLink
			title={categoryItem.title}
			iconPath={`/src/assets/icons/${categoryItem.icon}`}
			link={`/categories/${categoryItem.alias}`}
		/>
	{/each}
</div>

<style>
	.categoriesWrap {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		justify-items: start;
		justify-content: center;
		align-items: center;
		padding: 10px 40px;
		background: #ffffff;
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
	}
</style>
